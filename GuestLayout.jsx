import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";

const GuestLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "ℹ️" },
    { path: "/services", label: "Services", icon: "🩺" },
    { path: "/contact", label: "Contact", icon: "📞" },
    { path: "/prediction", label: "Prediction", icon: "🧠" },
    { path: "/chat", label: "Chat", icon: "💬" },
  ];

  return (
    <>
      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.3); /* semi-transparent */
          backdrop-filter: blur(10px) saturate(150%); /* glass blur */
          -webkit-backdrop-filter: blur(10px) saturate(150%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 20px rgba(255, 64, 129, 0.1);
          padding: 20px 0;
        }

        .navbar-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .navbar-brand {
          font-size: 32px;
          font-weight: 800;
          color: #4a3563;
          letter-spacing: 1px;
          text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
        }

        .nav-cards {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          width: 100%;
          max-width: 900px;
        }

        .nav-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(6px) saturate(150%);
          border-radius: 16px;
          text-decoration: none;
          color: #ff4081;
          font-weight: 600;
          font-size: 16px;
          width: 120px;
          height: 100px;
          transition: all 0.3s ease;
          border: 1.5px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .nav-card:hover {
          background: rgba(255, 64, 129, 0.9);
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(255, 64, 129, 0.4);
        }

        /* 🌟 Active page glow effect */
        .nav-card.active {
          border-color: #ff4081;
          box-shadow: 0 0 20px rgba(255, 64, 129, 0.6);
          transform: scale(1.05);
          background: rgba(255, 64, 129, 0.2);
        }

        .nav-icon {
          font-size: 28px;
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .nav-card {
            width: 45%;
            height: 90px;
          }
        }
      `}</style>

      <div className="navbar-wrapper">
        <Container className="navbar-container">
          <div className="navbar-brand">CrysterCircle</div>

          <div className="nav-cards">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-card ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* ---------- Main Page Outlet ---------- */}
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default GuestLayout;
