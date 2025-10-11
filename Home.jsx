import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import heroImage from "../../assets/images/hero-women.png";
import aboutImage from "../../assets/images/about-women.jpg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePredictionClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("You must register/login to take the test.");
      navigate("/register");
    } else {
      navigate("/prediction");
    }
  };

  return (
    <>
      <style>{`
        /* ================== HERO SECTION ================== */
        .hero-section {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          min-height: 90vh;
          background: linear-gradient(135deg, #fff0f6, #e0f7ff);
          padding: 60px 20px;
          overflow: hidden;
        }

        /* Animated Overlay */
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 182, 193, 0.3), transparent 70%),
                      radial-gradient(circle at 70% 70%, rgba(255, 223, 186, 0.3), transparent 70%);
          animation: floatOverlay 6s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes floatOverlay {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(10px, -10px); }
        }

        /* Floating Glow Dots */
        .glow-dot {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: rgba(255, 200, 220, 0.7);
          box-shadow: 0 0 20px rgba(255, 150, 200, 0.7);
          animation: floatGlow 8s ease-in-out infinite;
        }
        .glow-dot:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .glow-dot:nth-child(2) { top: 60%; left: 80%; animation-delay: 2s; }
        .glow-dot:nth-child(3) { top: 75%; left: 40%; animation-delay: 4s; }

        @keyframes floatGlow {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.8; }
        }

        /* Hero Content */
        .hero-text {
          flex: 1 1 400px;
          padding: 20px;
          text-align: left;
          z-index: 1;
        }
        .hero-text h1 {
          font-size: 50px;
          color: #ff4081;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .hero-text p {
          font-size: 18px;
          color: #4a3563;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .hero-btn {
          padding: 14px 28px;
          background-color: #ff8c00;
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-btn:hover {
          background-color: #e07b00;
          transform: scale(1.05);
        }

        .hero-image {
          flex: 1 1 400px;
          text-align: center;
          z-index: 1;
          padding: 20px;
        }
        .hero-image img {
          width: 90%;
          max-width: 500px;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        /* ================== ABOUT SECTION ================== */
        .about-section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          background: #fffafc;
        }
        .about-image {
          flex: 1 1 400px;
          text-align: center;
          padding: 20px;
        }
        .about-image img {
          width: 90%;
          max-width: 500px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease;
        }
        .about-image img:hover {
          transform: scale(1.05);
        }
        .about-text {
          flex: 1 1 400px;
          padding: 20px;
          text-align: left;
        }
        .about-text h2 {
          color: #ff4081;
          font-size: 32px;
          margin-bottom: 20px;
        }
        .about-text p {
          color: #634d4d;
          font-size: 17px;
          line-height: 1.8;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-section, .about-section {
            flex-direction: column;
            text-align: center;
          }
          .hero-text, .about-text {
            text-align: center;
          }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="glow-dot"></div>
        <div className="glow-dot"></div>
        <div className="glow-dot"></div>

        <div className="hero-text" data-aos="fade-right">
          <h1>Empowering Women's Health</h1>
          <h3 className="tagline">Your health, your power — embrace wellness with confidence.</h3>
          <p>
  Every woman deserves the knowledge and tools to understand her body. Our platform is designed 
  to promote early awareness and prevention of reproductive health conditions like PCOS and 
  early menopause. By combining medical insights with AI-powered prediction tools, we help you 
  monitor your symptoms, assess risk factors, and make informed lifestyle and healthcare decisions. 
  Empower yourself with data-driven confidence — because your health matters every day.
</p>

          <button className="hero-btn" onClick={handlePredictionClick}>
            🌸 Begin Wellness Check
          </button>
        </div>

        <div className="hero-image" data-aos="fade-left">
          <img src={heroImage} alt="Hero Woman" />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">
        <div className="about-image" data-aos="fade-right">
          <img src={aboutImage} alt="About Women's Health" />
        </div>
        <div className="about-text" data-aos="fade-left">
          <h2>About Our Mission</h2>
          <p>
            Our mission is to empower women with the tools, insights, and support they need to 
            understand and take charge of their reproductive health. We combine data-driven 
            technology with trusted medical resources to help detect PCOS and menopause risks 
            early, while offering guidance and community connections.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
