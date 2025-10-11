import React, { useState } from "react";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    bmi: "",
    menstrualCycle: "",
    hairGrowth: "no",
    acne: "no",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let score = 0;
    if (parseInt(formData.age) < 35) score += 1;
    if (parseFloat(formData.bmi) > 25) score += 1;
    if (formData.menstrualCycle === "irregular") score += 1;
    if (formData.hairGrowth === "yes" || formData.acne === "yes") score += 1;

    if (score >= 3) setResult("High risk for PCOS / Early Menopause. Consult a doctor.");
    else if (score === 2) setResult("Moderate risk. Monitor symptoms and consult healthcare professionals.");
    else setResult("Low risk, maintain a healthy lifestyle and regular checkups.");
  };

  return (
    <section className="prediction-section">
      <div className="prediction-card">
        <h2>PCOS & Early Menopause Prediction Test</h2>
        <p className="intro">
          Quick test to assess your risk. This is for informational purposes only, not a medical diagnosis.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            required
          />
          <input
            type="number"
            name="bmi"
            value={formData.bmi}
            onChange={handleChange}
            placeholder="BMI (Body Mass Index)"
            required
          />
          <select name="menstrualCycle" value={formData.menstrualCycle} onChange={handleChange} required>
            <option value="">Select Menstrual Cycle</option>
            <option value="regular">Regular</option>
            <option value="irregular">Irregular</option>
          </select>
          <select name="hairGrowth" value={formData.hairGrowth} onChange={handleChange} required>
            <option value="no">Excess Hair Growth?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select name="acne" value={formData.acne} onChange={handleChange} required>
            <option value="no">Acne?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button type="submit">Check My Risk</button>
        </form>

        {result && (
          <div className="prediction-result">
            <h3>Prediction Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>

      <style>{`
        .prediction-section {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          background: linear-gradient(to right, #ffe3e3, #e0f0ff);
        }
        .prediction-card {
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          text-align: center;
        }
        .prediction-card h2 {
          color: #ff4081;
          margin-bottom: 15px;
        }
        .prediction-card p.intro {
          font-size: 14px;
          margin-bottom: 25px;
          color: #634d4d;
        }
        .prediction-card input, .prediction-card select {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          font-size: 16px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }
        .prediction-card button {
          padding: 12px 25px;
          background-color: #ff8c00;
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, background-color 0.3s;
        }
        .prediction-card button:hover {
          transform: scale(1.05);
          background-color: #d47700;
        }
        .prediction-result {
          margin-top: 25px;
          padding: 20px;
          background: #fff0f6;
          border-radius: 15px;
          color: #4a3563;
        }

        @media (max-width: 600px) {
          .prediction-card { padding: 25px; }
        }
      `}</style>
    </section>
  );
};

export default PredictionForm;
