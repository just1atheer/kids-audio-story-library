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
      }}
    >
      <h2 style={{ margin: 0 }}>Kids Story App</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        {/* 1. Home */}
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        {/* 2. Admin (صفحة الأدمن الرئيسية) */}
        <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
          Admin
        </Link>

        {/* 3. Login */}
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>

        {/* 4. Sign Up */}
        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
          Sign Up
        </Link>

        {/* 5. Parent Dashboard */}
        <Link to="/parent" style={{ color: "white", textDecoration: "none" }}>
          Parent Dashboard
        </Link>

        {/* 6. Add Child */}
        <Link to="/add-child" style={{ color: "white", textDecoration: "none" }}>
          Add Child
        </Link>

        {/* 7. Stories */}
        <Link to="/stories" style={{ color: "white", textDecoration: "none" }}>
          Stories
        </Link>

        {/* 8. Progress */}
        <Link to="/progress" style={{ color: "white", textDecoration: "none" }}>
          Progress
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
