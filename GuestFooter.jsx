import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const GuestFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #ffe4ec, #e3b8ff);
          color: #4a3563;
          text-align: center;
          padding: 60px 20px 30px;
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 -4px 20px rgba(255, 64, 129, 0.15);
          position: relative;
        }

        .footer h3 {
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: 700;
          color: #ff4081;
        }

        .footer p.description {
          font-size: 16px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 25px;
          margin-bottom: 30px;
          list-style: none;
          padding: 0;
        }

        .footer-links li a {
          color: #4a3563;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s;
        }

        .footer-links li a:hover {
          color: #ff4081;
          text-shadow: 0 0 8px rgba(255, 64, 129, 0.3);
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-bottom: 25px;
        }

        .social-icons a {
          color: #fff;
          background: linear-gradient(135deg, #ff8bd8, #c17aff);
          font-size: 20px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 18px rgba(255, 64, 129, 0.4);
        }

        .footer-bottom {
          font-size: 14px;
          opacity: 0.8;
          color: #4a3563;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>

      <footer className="footer">
        <h3>PCOS & Early Menopause Awareness</h3>
        <p className="description">
          Empowering women with knowledge and support for PCOS, early menopause, and overall reproductive wellness.
        </p>

        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/pcos-info">PCOS Info</a></li>
          <li><a href="/early-menopause">Early Menopause</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>

        <div className="footer-bottom">
          © {currentYear} PCOS & Early Menopause Awareness | Built with 💖 to support women’s health.
        </div>
      </footer>
    </>
  );
};

export default GuestFooter;
