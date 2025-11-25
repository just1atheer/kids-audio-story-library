import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    // تسجيل الدخول
    localStorage.setItem("isLoggedIn", "true");

    // الانتقال لصفحة الفئات
    navigate("/stories");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f5ff",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "white",
          padding: "35px",
          borderRadius: "18px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      >
        {/* العنوان */}
        <h1 style={{ color: "#4f46e5", marginBottom: "10px" }}>Welcome Back</h1>
        <p style={{ color: "#666", marginBottom: "25px" }}>
          Login to continue exploring our stories
        </p>

        {/* فورم */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "10px",
                fontSize: "15px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Login
          </button>
        </form>

        {/* رابط إنشاء حساب */}
        <p style={{ marginTop: "20px", fontSize: "15px", color: "#444" }}>
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#4f46e5",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

