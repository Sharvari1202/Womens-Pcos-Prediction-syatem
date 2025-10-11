import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Guest pages
import GuestLayout from "./components/guestLayout/GuestLayout";
import Home from "./components/guestLayout/Home";
import About from "./components/guestLayout/About";
import Services from "./components/guestLayout/Services";
import ServiceDetail from "./components/guestLayout/ServiceDetail";
import Contact from "./components/guestLayout/Contact";
import PredictionForm from "./components/guestLayout/PredictionForm";
import GuestFooter from "./components/guestLayout/GuestFooter";
import Chatbot from "./pages/Chatbot";


// Auth pages
import Register from "./components/Register";
import Login from "./components/Login";

// Chat
import ChatRoom from "./components/ChatRoom";

// PrivateRoute wrapper
const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/register" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/register" />} />

        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute><GuestLayout /></PrivateRoute>}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="prediction" element={<PredictionForm />} />

          {/* New Chat Page */}
          <Route path="chat" element={<ChatRoom user={JSON.parse(localStorage.getItem("user"))?.name || "Guest"} />} />
          <Route path="/chatbot" element={<Chatbot />} />

        </Route>
      </Routes>

      {/* Footer always visible */}
      <GuestFooter />
    </Router>
  );
};

export default App;
