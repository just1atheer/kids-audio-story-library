import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        paddingTop: "100px",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        👋 Welcome Admin
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#444",
          marginBottom: "40px",
        }}
      >
        Manage stories & quizzes easily
      </p>

      <button
        onClick={() => navigate("/admin/add-story")}
        style={{
          padding: "15px 35px",
          fontSize: "22px",
          cursor: "pointer",
          background: "#43A047",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: "0 auto",
        }}
      >
        <span style={{ fontSize: "26px" }}>➕</span>
        Add Story & Quiz
      </button>
    </div>
  );
}
