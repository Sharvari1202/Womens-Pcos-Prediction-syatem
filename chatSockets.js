export default function chatSockets(io) {
  io.on("connection", (socket) => {
    console.log("🟢 User connected:", socket.id);

    // When a user joins a chatroom
    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`📥 User ${socket.id} joined room: ${room}`);
    });

    // When a message is sent
    socket.on("sendMessage", (data) => {
      const { room, message, user } = data;
      console.log(`💬 Message from ${user} in ${room}: ${message}`);

      // Broadcast message to everyone in the room
      io.to(room).emit("receiveMessage", { user, message });
    });

    // When user disconnects
    socket.on("disconnect", () => {
      console.log("🔴 User disconnected:", socket.id);
    });
  });
}
