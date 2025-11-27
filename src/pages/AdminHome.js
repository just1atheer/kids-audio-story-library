import React from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "30px", color: "#4f46e5" }}>Admin Panel</h1>

      <Link to="/admin/add-story">
        <button
          style={{
            padding: "12px 20px",
            marginRight: "15px",
            background: "#6a0dad",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ➕ Add Story
        </button>
      </Link>

      <Link to="/admin/add-quiz">
        <button
          style={{
            padding: "12px 20px",
            background: "#ff4fa3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          📝 Add Quiz
        </button>
      </Link>
    </div>
  );
}
