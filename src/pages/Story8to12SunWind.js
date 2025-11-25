import React from "react";

function Story8to12SunWind() {
  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ color: "#4f46e5", textAlign: "center" }}>
        The Sun and the Wind
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
          lineHeight: "1.6",
        }}
      >
        A classic story where the sun and the wind test their strength to see
        who can make a traveler remove his coat. A gentle lesson about kindness
        being stronger than force.
      </p>

      <audio controls style={{ marginTop: "25px", width: "100%" }}>
        <source
          src="https://files.catbox.moe/n89fox.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
}

export default Story8to12SunWind;
