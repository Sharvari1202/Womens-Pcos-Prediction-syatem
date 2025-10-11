import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const serviceData = {
    // 🩺 PCOS Education
    pcos: {
      title: "PCOS Education",
      icon: "🩺",
      content: (
        <>
          <p>
            Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of
            reproductive age. It occurs when the ovaries produce excess androgens (male hormones),
            which can disrupt ovulation and cause irregular periods, cysts, and fertility challenges.
          </p>

          <h3>Common Symptoms</h3>
          <ul>
            <li>Irregular or missed menstrual cycles</li>
            <li>Excess hair growth (face, chest, or abdomen)</li>
            <li>Acne or oily skin</li>
            <li>Thinning hair on the scalp</li>
            <li>Weight gain or difficulty losing weight</li>
            <li>Darkened skin around the neck or underarms</li>
            <li>Difficulty getting pregnant</li>
          </ul>

          <h3>Causes and Risk Factors</h3>
          <ul>
            <li><strong>Genetics:</strong> PCOS often runs in families.</li>
            <li><strong>Insulin Resistance:</strong> High insulin levels increase androgen production.</li>
            <li><strong>Hormonal Imbalance:</strong> Too much androgen interferes with normal ovulation.</li>
            <li><strong>Lifestyle Factors:</strong> Poor diet, stress, and inactivity can worsen symptoms.</li>
          </ul>

          <h3>Diagnosis</h3>
          <ul>
            <li>Physical exam and medical history</li>
            <li>Blood tests to measure hormone levels</li>
            <li>Pelvic ultrasound to check ovaries</li>
          </ul>

          <h3>Treatment & Management</h3>
          <ul>
            <li><strong>Lifestyle:</strong> Eat a balanced diet, exercise regularly, and manage weight.</li>
            <li><strong>Medications:</strong> Birth control pills, Metformin, or fertility drugs if needed.</li>
            <li><strong>Skin & Hair Care:</strong> Treatments for acne and excess hair growth.</li>
          </ul>

          <h3>Long-Term Health Risks</h3>
          <ul>
            <li>Type 2 diabetes</li>
            <li>Heart disease and high blood pressure</li>
            <li>Endometrial cancer</li>
            <li>Sleep apnea</li>
          </ul>

          <h3>Living Well with PCOS</h3>
          <p>
            With consistent care, women with PCOS can manage symptoms effectively and maintain fertility.
            Support groups, counseling, and medical follow-ups are valuable for long-term wellness.
          </p>
        </>
      ),
    },

    // 🌸 Early Menopause Support
    menopause: {
      title: "Early Menopause Support",
      icon: "🌸",
      content: (
        <>
          <p>
            Early menopause occurs when menstrual periods stop before the age of 40. This can happen
            naturally or due to medical treatments that affect the ovaries. Early menopause leads to a
            decline in estrogen, which can impact bone, heart, and reproductive health.
          </p>

          <h3>Symptoms</h3>
          <ul>
            <li>Hot flashes and night sweats</li>
            <li>Irregular or missed periods</li>
            <li>Vaginal dryness and discomfort</li>
            <li>Mood swings, anxiety, or depression</li>
            <li>Difficulty sleeping</li>
            <li>Reduced libido</li>
            <li>Weight gain and fatigue</li>
          </ul>

          <h3>Causes</h3>
          <ul>
            <li><strong>Genetics:</strong> Family history of early menopause.</li>
            <li><strong>Autoimmune disorders:</strong> Immune system attacks ovarian tissue.</li>
            <li><strong>Medical treatments:</strong> Chemotherapy or radiation therapy.</li>
            <li><strong>Lifestyle factors:</strong> Smoking, stress, and poor nutrition.</li>
          </ul>

          <h3>Diagnosis</h3>
          <p>
            A doctor may confirm early menopause through blood tests that check hormone levels, such as
            FSH (follicle-stimulating hormone) and estrogen, along with a review of symptoms and
            menstrual patterns.
          </p>

          <h3>Treatment Options</h3>
          <ul>
            <li><strong>Hormone Replacement Therapy (HRT):</strong> Restores estrogen to relieve symptoms.</li>
            <li><strong>Non-hormonal medications:</strong> For mood, hot flashes, or sleep support.</li>
            <li><strong>Lifestyle changes:</strong> Regular exercise, calcium-rich diet, stress reduction.</li>
            <li><strong>Emotional support:</strong> Counseling or joining menopause support groups.</li>
          </ul>

          <h3>Long-Term Health Concerns</h3>
          <ul>
            <li>Osteoporosis (bone loss)</li>
            <li>Heart disease</li>
            <li>Weight gain and metabolic issues</li>
          </ul>

          <h3>Self-Care & Support</h3>
          <p>
            Staying active, eating nutritious foods, and maintaining emotional health are key to managing
            early menopause. Medical guidance can help reduce long-term risks and improve overall
            quality of life.
          </p>
        </>
      ),
    },

    // 👩‍⚕️ Expert Consultations
    consultation: {
      title: "Expert Consultations",
      icon: "👩‍⚕️",
      content: (
        <>
          <p>
            Our expert consultation service connects you with certified healthcare professionals
            specializing in women’s hormonal health. Whether you’re managing PCOS, menopause, or
            related conditions, personalized advice can make all the difference.
          </p>

          <h3>What You Can Expect</h3>
          <ul>
            <li>One-on-one video or in-person consultations</li>
            <li>Personalized diagnosis and treatment plans</li>
            <li>Nutrition and lifestyle recommendations</li>
            <li>Ongoing follow-ups to track progress</li>
          </ul>

          <h3>Why Consult an Expert?</h3>
          <ul>
            <li>Get professional insights into your symptoms</li>
            <li>Access safe and effective treatment options</li>
            <li>Prevent long-term complications through early management</li>
          </ul>

          <h3>Available Specialists</h3>
          <ul>
            <li>Gynecologists</li>
            <li>Endocrinologists</li>
            <li>Nutritionists and fitness experts</li>
            <li>Mental health counselors</li>
          </ul>

          <p>
            Book a consultation today to receive guidance tailored to your health needs — helping you
            take control of your body and well-being.
          </p>
        </>
      ),
    },

    // 📚 Resources & Community
    community: {
  title: "Resources & Community",
  icon: "📚",
  content: (
    <>
      <p>
        Knowledge and community support empower women dealing with PCOS and menopause challenges.
        Explore reliable information, connect with others, and access free learning materials.
      </p>

      <h3>📖 Educational Resources</h3>
      <ul>
        <li>
          <a href="https://www.who.int/health-topics/pcos" target="_blank" rel="noopener noreferrer">
            World Health Organization: Understanding PCOS
          </a>
        </li>
        <li>
          <a href="https://www.womenshealth.gov/" target="_blank" rel="noopener noreferrer">
            Women’s Health.gov — Hormonal Health & Wellness
          </a>
        </li>
        <li>
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK278959/" target="_blank" rel="noopener noreferrer">
            National Library of Medicine: PCOS Overview
          </a>
        </li>
      </ul>

      <h3>🎥 Videos & Learning</h3>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=pcos-awareness"
            target="_blank"
            rel="noopener noreferrer"
          >
            PCOS Explained – Symptoms & Treatment (YouTube)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=menopause-support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coping with Menopause Naturally
          </a>
        </li>
      </ul>

      <h3>💬 Support & Forums</h3>
      <ul>
        <li>
          <a href="/chatroom">Join our Community Chatroom</a> — Talk with others who share similar
          experiences.
        </li>
        <li>
          <a
            href="https://www.reddit.com/r/PCOS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit PCOS Community
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/groups/PCOSsupport/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook PCOS Support Group
          </a>
        </li>
      </ul>

      <h3>📄 Downloadable Resources</h3>
      <ul>
        <li>
          <a href="/files/pcos_guide.pdf" download>
            PCOS Lifestyle Guide (PDF)
          </a>
        </li>
        <li>
          <a href="/files/menopause_checklist.pdf" download>
            Menopause Health Checklist (PDF)
          </a>
        </li>
      </ul>

      <p>
        Stay connected with our growing network of women, doctors, and advocates who believe in
        empowering health through education, awareness, and community care.
      </p>
    </>
  ),
},


    // 📝 Prediction Test
    prediction: {
      title: "Take Prediction Test",
      icon: "📝",
      content: (
        <p>
          Use our AI-powered prediction tool to assess your potential risk for PCOS or early menopause.
          Get instant insights and lifestyle recommendations to maintain your reproductive health.
        </p>
      ),
    },
  };

  const service = serviceData[id] || {
    title: "Service Not Found",
    icon: "❌",
    content: <p>Sorry, we couldn't find details for this service.</p>,
  };

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#fff0f6",
        color: "#4a3563",
        minHeight: "80vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "80px", marginBottom: "20px" }}>{service.icon}</div>
        <h2 style={{ fontSize: "36px", color: "#ff4081", marginBottom: "20px" }}>
          {service.title}
        </h2>
      </div>

      <div
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          maxWidth: "900px",
          margin: "0 auto 40px",
          textAlign: "left",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {service.content}
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => navigate("/services")}
          style={{
            background: "#ff4081",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ← Back to Services
        </button>
      </div>
    </section>
  );
};

export default ServiceDetail;
