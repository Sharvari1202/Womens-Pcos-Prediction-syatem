import React, { useEffect, useRef, useState } from "react";
import pcosImg from "../../assets/images/pcos-awareness.jpg";
import menopauseImg from "../../assets/images/early-menopause.jpg";
import lifestyleImg from "../../assets/images/lifestyle-support.jpg";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

const About = () => {
  const useFadeInOnScroll = () => {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return [ref, visible];
  };

  const [section1Ref, section1Visible] = useFadeInOnScroll();
  const [section2Ref, section2Visible] = useFadeInOnScroll();
  const [section3Ref, section3Visible] = useFadeInOnScroll();

  return (
    <>
      <style>{`
        .about-section {
          padding: 80px 20px;
          background: radial-gradient(circle at 10% 20%, #ffe6f0 0%, #f0f7ff 90%);
          color: #4a3563;
          position: relative;
          overflow: hidden;
        }

        .section-title h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #ff4081;
          text-align: center;
        }

        .section-title p {
          font-size: 18px;
          color: #634d4d;
          text-align: center;
          margin-bottom: 40px;
        }

        .about-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin-bottom: 80px;
        }

        .about-text, .about-images {
          flex: 1;
          min-width: 300px;
          margin: 20px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease-out;
        }

        .about-text.visible, .about-images.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-text h3 {
          font-size: 28px;
          margin-bottom: 15px;
          color: #4a3563;
        }

        .about-text p {
          font-size: 16px;
          line-height: 1.7;
          color: #634d4d;
          margin-bottom: 20px;
        }

        .about-images {
          position: relative;
        }

        .about-images img.main-img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          transition: transform 0.5s ease, box-shadow 0.5s ease, filter 0.5s ease;
        }

        .about-images img.main-img:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          filter: brightness(1.05);
        }

        .floating-icon {
          position: absolute;
          width: 50px;
          opacity: 0.8;
          animation: float 6s ease-in-out infinite;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .floating-icon:hover {
          transform: scale(1.3) rotate(10deg);
          filter: drop-shadow(0 0 10px #ff4081);
          cursor: pointer;
        }

        .floating-icon.icon1 { top: 10%; left: 5%; animation-delay: 0s; }
        .floating-icon.icon2 { top: 50%; left: 90%; animation-delay: 2s; }
        .floating-icon.icon3 { top: 70%; left: 20%; animation-delay: 4s; }
        .floating-icon.icon4 { top: 20%; left: 70%; animation-delay: 1s; }

        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        @media (max-width: 768px) {
          .about-content { flex-direction: column; }
          .floating-icon { display: none; }
        }
      `}</style>

      <section className="about-section">
        <div className="section-title">
          <h2>Women's Health & Wellness Guide</h2>
          <p>Empowering women with knowledge on PCOS, early menopause, and reproductive health.</p>
        </div>

        {/* Section 1: PCOS Awareness */}
        <div className="about-content">
          <div className={`about-text ${section1Visible ? "visible" : ""}`} ref={section1Ref}>
            <h3>PCOS Awareness</h3>
            <p>
              Polycystic Ovary Syndrome (PCOS) affects millions of women worldwide.
              Symptoms include irregular periods, acne, excessive hair growth, and hormonal imbalance.
              Early diagnosis, lifestyle management, and medical guidance can improve quality of life and reproductive health.
            </p>
          </div>
          <div className={`about-images ${section1Visible ? "visible" : ""}`}>
            <img src={pcosImg} alt="PCOS Awareness" className="main-img" />
            <img src={icon1} alt="icon1" className="floating-icon icon1" />
            <img src={icon2} alt="icon2" className="floating-icon icon2" />
          </div>
        </div>

        {/* Section 2: Early Menopause Support */}
        <div className="about-content">
          <div className={`about-text ${section2Visible ? "visible" : ""}`} ref={section2Ref}>
            <h3>Early Menopause Support</h3>
            <p>
              Early menopause occurs when ovarian function declines before age 45, affecting fertility, hormonal balance, and long-term health. Women may experience irregular periods, hot flashes, night sweats, mood swings, and decreased bone density. Understanding the symptoms early allows for timely medical consultation and management. Our platform provides educational resources, expert guidance, and tips to help women cope with the physical and emotional challenges of early menopause, ensuring a healthier and more informed life.
            </p>
          </div>
          <div className={`about-images ${section2Visible ? "visible" : ""}`}>
            <img src={menopauseImg} alt="Early Menopause" className="main-img" />
            <img src={icon3} alt="icon3" className="floating-icon icon3" />
            <img src={icon4} alt="icon4" className="floating-icon icon4" />
          </div>
        </div>

        {/* Section 3: Lifestyle Support */}
        <div className="about-content">
          <div className={`about-text ${section3Visible ? "visible" : ""}`} ref={section3Ref}>
            <h3>Lifestyle & Support</h3>
            <p>
              Maintaining a healthy lifestyle is key to managing PCOS and early menopause effectively. Balanced nutrition, regular physical activity, proper sleep, and stress management play a vital role in hormonal balance and overall well-being. Joining supportive communities and accessing expert advice can help women share experiences, gain practical tips, and stay motivated. Our platform offers curated resources, wellness guidance, and professional consultations to empower women to lead a healthier, confident, and informed life.
            </p>
          </div>
          <div className={`about-images ${section3Visible ? "visible" : ""}`}>
            <img src={lifestyleImg} alt="Lifestyle Support" className="main-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
