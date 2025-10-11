import React, { useState } from "react";

const Prediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    bmi: "",
    irregularPeriods: "no",
    acne: "no",
    hairGrowth: "no",
    hotFlashes: "no",
  });

  const [result, setResult] = useState(null);

  // Handle input changes
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Basic mock prediction logic
    let pcosScore = 0;
    if (formData.irregularPeriods === "yes") pcosScore += 2;
    if (formData.acne === "yes") pcosScore += 1;
    if (formData.hairGrowth === "yes") pcosScore += 1;

    let menopauseScore = 0;
    if (formData.age < 45 && formData.hotFlashes === "yes") menopauseScore += 2;

    let prediction = "";
    if (pcosScore >= 3) prediction += "High chance of PCOS. ";
    if (menopauseScore >= 2) prediction += "Early menopause risk detected.";
    if (!prediction) prediction = "No significant risk detected.";

    setResult(prediction);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", background: "#fff0f6", borderRadius: "15px", boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#ff4081" }}>PCOS & Early Menopause Prediction</h2>
      <form onSubmit={handleSubmit}>
        <label>Age:</label><br />
        <input type="number" name="age" value={formData.age} onChange={handleChange} required /><br /><br />

        <label>BMI:</label><br />
        <input type="number" name="bmi" value={formData.bmi} onChange={handleChange} required /><br /><br />

        <label>Do you have irregular periods?</label><br />
        <select name="irregularPeriods" value={formData.irregularPeriods} onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select><br /><br />

        <label>Do you have acne?</label><br />
        <select name="acne" value={formData.acne} onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select><br /><br />

        <label>Do you have excessive hair growth?</label><br />
        <select name="hairGrowth" value={formData.hairGrowth} onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select><br /><br />

        <label>Do you experience hot flashes?</label><br />
        <select name="hotFlashes" value={formData.hotFlashes} onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select><br /><br />

        <button type="submit" style={{ padding: "10px 20px", background: "#ff8c00", color: "#fff", borderRadius: "50px", border: "none", cursor: "pointer" }}>Check Prediction</button>
      </form>

      {result && (
        <div style={{ marginTop: "20px", padding: "15px", background: "#ffe6f0", borderRadius: "10px", fontWeight: "600", color: "#4a3563" }}>
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default Prediction;
