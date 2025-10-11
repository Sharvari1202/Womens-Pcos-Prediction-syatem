import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import messageRoutes from "./routes/messageRoutes.js";
import Message from "./models/Message.js";

// ====== MongoDB Connection ======
mongoose
  .connect("mongodb://localhost:27017/chatapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ====== Express Setup ======
const app = express();
app.use(cors());
app.use(express.json());

// ====== REST API ======
app.use("/api/messages", messageRoutes);

// ====== HTTP + Socket.io ======
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// ====== Track users per room ======
const roomUsers = {}; // { room: { socket.id: username } }

// ====== Socket.io Logic ======
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  // User joins a room
  socket.on("join_room", ({ room, username }) => {
    socket.join(room);
    if (!roomUsers[room]) roomUsers[room] = {};
    roomUsers[room][socket.id] = username;
    console.log(`👋 ${username} joined ${room}`);

    // Broadcast updated users list to the room
    io.to(room).emit("update_users", Object.values(roomUsers[room]));
  });

  // User sends message
  socket.on("send_message", async (data) => {
    io.to(data.room).emit("receive_message", data);

    // Save message in MongoDB
    try {
      await Message.create({ room: data.room, user: data.user, message: data.message });
    } catch (err) {
      console.error("❌ DB Save Error:", err);
    }

    // 🧠 AI Bot responds with supportive messages
    if (data.user !== "AI Bot") {
      let botReply = "";
      const msg = data.message.toLowerCase();

      if (msg.includes("pcos")) {
        botReply = "AI Bot: PCOS can be managed with the right balance of diet, exercise, and support. You’re not alone 💪";
      } else if (msg.includes("menopause")) {
        botReply = "AI Bot: Menopause is a natural phase — remember to take care of your mental and physical health 🌸";
      } else if (msg.includes("hello") || msg.includes("hi")) {
        botReply = `AI Bot: Hello ${data.user}! How are you feeling today? 😊`;
      } else if (msg.includes("stress")) {
        botReply = "AI Bot: Stress is tough — try deep breathing or a short walk. Small steps can help 🌿";
      } else {
        botReply = `AI Bot: Interesting point, ${data.user}! Thanks for sharing your thoughts. 🤔`;
      }

      // Send delayed AI Bot reply
      setTimeout(() => {
        const aiData = { room: data.room, user: "AI Bot", message: botReply };
        io.to(data.room).emit("receive_message", aiData);
      }, 1500);
    }
  });

  // User disconnects
  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
    for (const room in roomUsers) {
      if (roomUsers[room][socket.id]) {
        delete roomUsers[room][socket.id];
        io.to(room).emit("update_users", Object.values(roomUsers[room]));
      }
    }
  });
});

// ====== Start Server ======
const PORT = 8000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
