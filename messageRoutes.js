import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// ✅ POST - Save a new message
router.post("/", async (req, res) => {
  try {
    const { room, user, message } = req.body;

    if (!room || !user || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newMessage = new Message({ room, user, message });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("❌ Error saving message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ GET - Fetch all messages for a room
router.get("/:room", async (req, res) => {
  try {
    const { room } = req.params;
    const messages = await Message.find({ room }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    console.error("❌ Error fetching messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
