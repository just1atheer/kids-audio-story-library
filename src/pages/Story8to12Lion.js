import React from "react";

function Story8to12Lion() {
  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ color: "#4f46e5", textAlign: "center" }}>
        The Brave Lion
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
          src="https://i.imgur.com/mf1lUjA.png"
          alt="Lion Story"
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
          lineHeight: "1.6",
        }}
      >
        A brave lion faces a challenge and learns an important lesson about
        courage and kindness.
      </p>

      <audio controls style={{ marginTop: "25px", width: "100%" }}>
        <source
          src="https://files.catbox.moe/jkfts2.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
}

export default Story8to12Lion;
