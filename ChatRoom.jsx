import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const ChatRoom = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("general");
  const [username, setUsername] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);

  // ✅ Connect to socket.io backend
  useEffect(() => {
    const s = io("http://localhost:8000", {
      transports: ["websocket", "polling"],
    });
    setSocket(s);

    s.on("connect", () => console.log("✅ Connected to server"));
    s.on("receive_message", (data) =>
      setMessages((prev) => [...prev, data])
    );
    s.on("update_users", (users) => setOnlineUsers(users));

    return () => s.disconnect();
  }, []);

  // ✅ Fetch existing messages when joining a room
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/messages/${room}`);
        setMessages(res.data);
      } catch (err) {
        console.error("❌ Error loading messages:", err.message);
      }
    };
    if (room) fetchMessages();
  }, [room]);

  // ✅ Join room when username + socket ready
  useEffect(() => {
    if (socket && username) {
      socket.emit("join_room", { room, username });
    }
  }, [socket, room, username]);

  // ✅ Send message (with backend POST + socket emit)
  const sendMessage = async () => {
    if (!message.trim()) return;
    if (!username) {
      alert("Please enter your name first!");
      return;
    }

    const msgData = { room, user: username, message };

    // Emit via socket
    socket.emit("send_message", msgData);

    try {
      // Also save in MongoDB
      await axios.post("http://localhost:8000/api/messages", msgData);
    } catch (err) {
      console.error("❌ Error sending message:", err.message);
    }

    setMessage("");
  };

  return (
    <div className="chat-container" style={styles.container}>
      <h2 style={{ color: "#ff4081" }}>💬 Community Chat Room</h2>

      {!username ? (
        <div style={styles.login}>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={() => {
              if (!username.trim()) {
                alert("Please enter a name to join");
                return;
              }
              setUsername(username);
            }}
            style={styles.button}
          >
            Join Chat
          </button>
        </div>
      ) : (
        <>
          {/* Room Selector */}
          <div style={styles.roomSelect}>
            <label style={{ marginRight: "10px" }}>Choose a room:</label>
            <select
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              style={styles.select}
            >
              <option value="general">General</option>
              <option value="pcos">PCOS</option>
              <option value="menopause">Menopause</option>
            </select>
          </div>

          {/* Online Users */}
          <div style={styles.userList}>
            <h4>👥 Online Users ({onlineUsers.length})</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {onlineUsers.map((user, i) => (
                <li key={i}>• {user}</li>
              ))}
            </ul>
          </div>

          {/* Chat Box */}
          <div style={styles.chatBox}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={
                  msg.user === username
                    ? styles.myMsg
                    : msg.user === "AI Bot"
                    ? styles.botMsg
                    : styles.otherMsg
                }
              >
                <strong>{msg.user}:</strong> {msg.message}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div style={styles.inputBox}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.button}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    background: "#fff0f6",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  roomSelect: {
    marginBottom: "10px",
  },
  select: {
    padding: "8px",
    borderRadius: "5px",
  },
  userList: {
    background: "#fff",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "15px",
    textAlign: "left",
  },
  chatBox: {
    height: "300px",
    overflowY: "auto",
    margin: "20px 0",
    padding: "10px",
    background: "#fff",
    borderRadius: "10px",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    background: "#ff4081",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
  },
  login: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  myMsg: {
    textAlign: "right",
    color: "#4a3563",
  },
  otherMsg: {
    textAlign: "left",
    color: "#333",
  },
  botMsg: {
    textAlign: "left",
    color: "#00897b",
    fontStyle: "italic",
  },
};

export default ChatRoom;
