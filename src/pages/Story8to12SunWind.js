import React from "react";
import { Link } from "react-router-dom";

export default function Story8to12SunWind() {
  return (
    <div style={{ padding: "40px", maxWidth: "650px", margin: "auto" }}>
      <h1 style={{ color: "#4f46e5", textAlign: "center" }}>
        The Sun and The Wind
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
          marginTop: "25px",
        }}
      >
        <img
          src="https://i.imgur.com/rTwrXqQ.png"
          alt="Sun and Wind Story"
          style={{
            width: "70%",
            display: "block",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        />
      </div>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          color: "#555",
          textAlign: "center",
        }}
      >
        A classic story about the Sun and the Wind trying to prove who is
        stronger.
      </p>

      <audio controls style={{ marginTop: "25px", width: "100%" }}>
        <source src="https://files.catbox.moe/n89fox.mp3" type="audio/mp3" />
      </audio>

      <Link to="/quiz-sunwind">
        <button
          style={{
            background: "#4f46e5",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            marginTop: "25px",
            cursor: "pointer",
            fontSize: "18px",
            width: "100%",
          }}
        >
          Start Quiz
        </button>
      </Link>
    </div>
  );
}
