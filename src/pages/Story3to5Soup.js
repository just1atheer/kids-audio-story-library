import React from "react";
import { Link } from "react-router-dom";

function Story3to5Soup() {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ color: "#4f46e5", textAlign: "center" }}>
        Warm Soup Story
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
          src="https://i.imgur.com/nCBzSyo.png"
          alt="Warm Soup Story"
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
        A cozy and simple story about a mother making warm soup in the kitchen.
      </p>

      <audio controls style={{ marginTop: "25px", width: "100%" }}>
        <source src="https://files.catbox.moe/60iql0.mp3" type="audio/mp3" />
      </audio>

      {/* زر الكويز */}
      <Link to="/quiz-soup">
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

export default Story3to5Soup;
