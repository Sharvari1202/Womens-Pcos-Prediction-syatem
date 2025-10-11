import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === formData.email)) {
      alert("User with this email already exists!");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", background: "#fff0f6", borderRadius: "15px" }}>
      <h2 style={{ textAlign: "center", color: "#ff4081" }}>Register</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br /><br />

        <button type="submit" style={{ padding: "10px 20px", background: "#ff8c00", color: "#fff", borderRadius: "50px", border: "none", cursor: "pointer" }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
