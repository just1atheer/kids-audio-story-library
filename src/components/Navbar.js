import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) return null; // 🔥 إخفاء البار قبل تسجيل الدخول

  return (
    <nav
      style={{
        background: "#4f46e5",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2 style={{ margin: 0, fontWeight: "700", fontSize: "24px" }}>
        Kids Audio Story Library 🎧
      </h2>

      <div style={{ display: "flex", gap: "30px", fontSize: "18px" }}>

        {/* 🔹 Home */}
        <Link
          to="/home"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Home
        </Link>

        {/* 🔹 Start → ترجع لصفحة اختيار الدور */}
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("role");
          }}
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Start
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
