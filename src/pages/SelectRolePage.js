import React from "react";
import { useNavigate } from "react-router-dom";

export default function SelectRolePage() {
  const navigate = useNavigate();

  const chooseRole = (role) => {
    localStorage.setItem("role", role); // نحفظ الدور
    navigate("/login"); // نرسل المستخدم لصفحة تسجيل الدخول
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f6f6ff",
        fontFamily: "Poppins",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "30px", color: "#4f46e5" }}>
        Choose Your Role
      </h1>

      <div style={{ display: "flex", gap: "25px" }}>
        <button
          onClick={() => chooseRole("user")}
          style={{
            padding: "15px 35px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          User
        </button>

        <button
          onClick={() => chooseRole("admin")}
          style={{
            padding: "15px 35px",
            background: "#ff4f81",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          Admin
        </button>
      </div>
    </div>
  );
}
