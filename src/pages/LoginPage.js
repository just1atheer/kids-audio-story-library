import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    // 🔥 يجيب الدور المختار من صفحة Select Role أو صفحة Sign Up
    let role = localStorage.getItem("role");

    // لو مافي دور نخلي الدور User بشكل افتراضي
    if (!role) {
      role = "user";
      localStorage.setItem("role", "user");
    }

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) {
        setError(
          response.status === 401
            ? "Email or password is incorrect."
            : "Login failed. Please try again."
        );
        return;
      }

      let data = null;
      try {
        data = await response.json();
      } catch {}

      if (data?.token) {
        localStorage.setItem("token", data.token);
      }

      localStorage.setItem("isLoggedIn", "true");

      // 🔥 تحويل المستخدم حسب الدور
      if (role === "admin") navigate("/admin");
      else navigate("/home");

    } catch (err) {
      console.error(err);
      setError("Cannot connect to server. Please try again later.");
    }
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
        fontFamily: "Poppins, sans-serif",
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
        }}
      >
        <h1 style={{ color: "#4f46e5", marginBottom: "10px", fontWeight: "700" }}>
          Welcome Back
        </h1>

        <p style={{ color: "#666", marginBottom: "25px", fontSize: "16px" }}>
          Login to continue exploring our stories
        </p>

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
            <p style={{ color: "red", marginBottom: "10px", fontSize: "15px" }}>
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
              fontWeight: "600",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "15px", color: "#444" }}>
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#4f46e5",
              textDecoration: "underline",
              fontWeight: "600",
            }}
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
