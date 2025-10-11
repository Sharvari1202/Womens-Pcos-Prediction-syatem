import React, { useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! 💖 I'm Cryster, your health assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const suggestions = [
    "PCOS Info",
    "Early Menopause",
    "Diet Tips",
    "Exercise Advice",
    "Emotional Support",
  ];

  const handleUserInput = (customText = null) => {
    const text = customText || input;
    if (!text.trim()) return;

    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    const lower = text.toLowerCase();
    let botReply = "I'm not sure I understand. Could you please rephrase? 😊";

    if (lower.includes("pcos")) {
      botReply =
        "PCOS (Polycystic Ovary Syndrome) is a hormonal condition affecting women of reproductive age. It can cause irregular periods, acne, and sometimes cysts in the ovaries. 🌸 Managing it involves a healthy lifestyle and medical guidance.";
    } else if (lower.includes("menopause")) {
      botReply =
        "Early menopause can happen before age 40. Symptoms include hot flashes, mood changes, and sleep issues. It’s important to consult a doctor for hormone and lifestyle management. 💫";
    } else if (lower.includes("diet")) {
      botReply =
        "A PCOS-friendly diet includes whole grains, lean proteins, and fresh vegetables. Avoid sugary drinks and processed foods. 🥗";
    } else if (lower.includes("exercise")) {
      botReply =
        "Regular exercise like yoga, brisk walking, or strength training can help balance hormones and improve well-being. 💪";
    } else if (lower.includes("emotional") || lower.includes("stress")) {
      botReply =
        "Managing stress is key! Try meditation, breathing exercises, journaling, or connecting with others in our community chatroom. 💕";
    } else if (lower.includes("thank")) {
      botReply = "You're most welcome! 🌷 Always here to support your wellness journey.";
    } else if (lower.includes("help")) {
      botReply =
        "Sure! I can tell you about PCOS, early menopause, diet, exercise, or emotional support. Which would you like to explore?";
    }

    const botMessage = { sender: "bot", text: botReply };
    setTimeout(() => setMessages((prev) => [...prev, botMessage]), 500);

    setInput("");
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #fff0f6, #f3e5f5)",
        minHeight: "85vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* --- Header --- */}
        <div
          style={{
            background: "linear-gradient(135deg, #ff80ab, #ce93d8)",
            color: "white",
            padding: "20px",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "20px",
            letterSpacing: "0.5px",
          }}
        >
          🤖 Cryster Health Chatbot
        </div>

        {/* --- Chat Messages --- */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            maxHeight: "400px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  background:
                    msg.sender === "user"
                      ? "linear-gradient(135deg, #ff80ab, #ffb3e5)"
                      : "linear-gradient(135deg, #f3e5f5, #e1bee7)",
                  color: msg.sender === "user" ? "#fff" : "#4a148c",
                  padding: "10px 16px",
                  borderRadius: "18px",
                  maxWidth: "75%",
                  fontSize: "15px",
                  lineHeight: "1.5",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                {msg.sender === "bot" && <FaRobot style={{ marginRight: "6px" }} />}
                {msg.text}
                {msg.sender === "user" && (
                  <FaUser style={{ marginLeft: "6px", fontSize: "13px" }} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- Input Field --- */}
        <div
          style={{
            display: "flex",
            padding: "15px",
            borderTop: "1px solid #eee",
            background: "#fafafa",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUserInput()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "12px 15px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "15px",
              }}
            />
            <button
              onClick={() => handleUserInput()}
              style={{
                marginLeft: "10px",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(135deg, #ff80ab, #ba68c8)",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Send
            </button>
          </div>

          {/* --- Suggestion Buttons --- */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {suggestions.map((text, index) => (
              <button
                key={index}
                onClick={() => handleUserInput(text)}
                style={{
                  background: "linear-gradient(135deg, #f8bbd0, #ce93d8)",
                  color: "#4a148c",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.background =
                    "linear-gradient(135deg, #f48fb1, #ba68c8)")
                }
                onMouseOut={(e) =>
                  (e.target.style.background =
                    "linear-gradient(135deg, #f8bbd0, #ce93d8)")
                }
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
