import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const cardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.2s",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f4ff",
        padding: "50px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#4f46e5",
          fontSize: "45px",
          fontWeight: "700",
          marginBottom: "40px",
        }}
      >
       Welcome to Kids Audio Story Library 🎧💜

      </h1>

      {/* الكروت */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >

        {/* Stories */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={() => navigate("/stories")}
        >
          <h2 style={{ color: "#4f46e5" }}>📚 Stories</h2>
          <p style={{ color: "#666" }}>Explore age-grouped stories.</p>
        </div>

        {/* Parent Dashboard */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={() => navigate("/parent")}
        >
          <h2 style={{ color: "#4f46e5" }}>👨‍👧 Parent Dashboard</h2>
          <p style={{ color: "#666" }}>Manage your children list.</p>
        </div>

        {/* Add Child */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={() => navigate("/add-child")}
        >
          <h2 style={{ color: "#4f46e5" }}>➕ Add Child</h2>
          <p style={{ color: "#666" }}>Add a new child profile.</p>
        </div>

        {/* Progress */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={() => navigate("/progress")}
        >
          <h2 style={{ color: "#4f46e5" }}>📊 Progress</h2>
          <p style={{ color: "#666" }}>View progress and quiz scores.</p>
        </div>

      </div>
    </div>
  );
}
