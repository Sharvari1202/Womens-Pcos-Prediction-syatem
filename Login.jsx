import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (!user) {
      alert("Invalid email or password!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user)); // Save logged-in user
    navigate("/home"); // Redirect to Home
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", background: "#fff0f6", borderRadius: "15px" }}>
      <h2 style={{ textAlign: "center", color: "#ff4081" }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br /><br />

        <button type="submit" style={{ padding: "10px 20px", background: "#ff8c00", color: "#fff", borderRadius: "50px", border: "none", cursor: "pointer" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
