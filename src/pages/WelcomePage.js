import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("loggedIn", "true");
    window.location.href = "/stories";
  };

  return (
    <div
      style={{
        padding: "60px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#4f46e5", fontSize: "36px", marginBottom: "10px" }}>
        Welcome to Our Audio Stories Library
      </h1>

      <p style={{ color: "#555", fontSize: "18px", marginBottom: "40px" }}>
        Enjoy fun and educational stories for kids of all ages!
      </p>

      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "400px",
          margin: "0 auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
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
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#4f46e5",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            width: "100%",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "15px",
            fontSize: "16px",
            color: "#444",
          }}
        >
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
      </form>
    </div>
  );
}
