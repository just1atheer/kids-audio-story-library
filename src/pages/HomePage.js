import React from "react";
import { useNavigate } from "react-router-dom";

export default function SelectRolePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f3ff",
        fontFamily: "Poppins, sans-serif",
        paddingTop: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "55px",
          marginBottom: "40px",
          color: "#4f46e5",
          fontWeight: "700",
        }}
      >
        Choose Your Role
      </h1>

      <div style={{ display: "flex", gap: "40px" }}>

        {/* USER BUTTON */}
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "25px 60px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "28px",
            fontWeight: "600",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            transition: "0.2s",
          }}
        >
          User
        </button>

        {/* ADMIN BUTTON */}
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "25px 60px",
            background: "#ff4f81",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "28px",
            fontWeight: "600",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            transition: "0.2s",
          }}
        >
          Admin
        </button>

      </div>
    </div>
  );
}
