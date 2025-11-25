import React from "react";

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
        A short and cozy story about warm soup that helps a little child feel better.
      </p>

      <audio controls style={{ marginTop: "25px", width: "100%" }}>
        <source
          src="https://files.catbox.moe/60iql0.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
}

export default Story3to5Soup;
