import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPass) {
      setError("Passwords do not match!");
      return;
    }

    if (!role) {
      setError("Please select a role.");
      return;
    }

    // ✨ نحفظ الدور في localStorage
    localStorage.setItem("role", role);

    alert("Account created successfully! 🎧");

    // توجيه المستخدم لصفحة تسجيل الدخول
    navigate("/login");
  };

  return (
    <section
      className="signup-page"
      style={{
        fontFamily: "Poppins, sans-serif",
        maxWidth: "430px",
        margin: "50px auto",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontWeight: "700", color: "#4f46e5" }}>✨ Create Your Account</h1>
      <p className="subtitle" style={{ color: "#666", marginBottom: "25px" }}>
        Join Kids Audio Story Library and start listening today!
      </p>

      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm password"
          required
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        {/* 🌟 اختيار الدور User / Admin */}
        <select
          required
          className="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ marginTop: "10px" }}
        >
          <option value="">Select your role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {/* الخطأ */}
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
        )}

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "12px",
            width: "100%",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>

        <p className="login-link" style={{ marginTop: "20px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </section>
  );
}
