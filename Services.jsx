import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    // Restrict access for chatroom if not logged in
    if (id === "chatroom" && !user) {
      alert("You must be logged in to join the chatroom!");
      navigate("/login");
      return;
    }

    // Navigate based on selected service
    if (id === "chatroom") {
      navigate("/chatroom");
      return;
    }

    navigate(`/services/${id}`);
  };

  const servicesList = [
    {
      id: "pcos",
      title: "PCOS Education",
      desc: "Learn about symptoms, diagnosis, and management strategies for Polycystic Ovary Syndrome.",
      icon: "🩺",
    },
    {
      id: "menopause",
      title: "Early Menopause Support",
      desc: "Understand early menopause, its symptoms, health implications, and available treatments.",
      icon: "🌸",
    },
    {
      id: "consultation",
      title: "Expert Consultations",
      desc: "Connect with certified healthcare professionals for guidance and personalized advice.",
      icon: "👩‍⚕️",
    },
    {
      id: "community",
      title: "Resources & Community",
      desc: "Access articles, videos, and forums to learn and share experiences with other women.",
      icon: "📚",
    },
    
    {
  id: "chatbot",
  title: "Health Assistant Chatbot",
  desc: "Chat with our friendly AI-based assistant for instant PCOS and menopause information.",
  icon: "🤖",
},

  ];

  return (
    <>
      <style>{`
        .services-section {
          padding: 80px 20px;
          background: #fff0f6;
          color: #4a3563;
          text-align: center;
        }
        .services-section h2 {
          font-size: 36px;
          margin-bottom: 40px;
          color: #ff4081;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          justify-items: center;
        }
        .service-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .service-icon {
          font-size: 50px;
          margin-bottom: 15px;
        }
        .service-card h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: #ff4081;
        }
        .service-card p {
          font-size: 16px;
          line-height: 1.6;
        }
      `}</style>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleCardClick(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
