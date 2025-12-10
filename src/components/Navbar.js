import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
      {/* عنوان التطبيق */}
      <h2 style={{ margin: 0, fontWeight: "700" }}>Story App</h2>

      {/* الروابط */}
      <div style={{ display: "flex", gap: "30px", fontSize: "18px" }}>

        {/* Home */}
        <Link
          to="/home"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Home
        </Link>

        {/* Admin */}
        <Link
          to="/admin"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Admin
        </Link>

        {/* Login */}
        <Link
          to="/login"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Login
        </Link>

        {/* Sign Up */}
        <Link
          to="/signup"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Sign Up
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
