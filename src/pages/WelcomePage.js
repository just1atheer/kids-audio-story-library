import React from "react";

function WelcomePage() {
  return (
    <div style={{
      textAlign: "center",
      paddingTop: "80px"
    }}>
      <h1 style={{ fontSize: "40px", color: "#4f46e5" }}>
        Welcome to our Audio Stories Library 🎧
      </h1>

      <p style={{
        fontSize: "20px",
        color: "#555",
        marginTop: "15px"
      }}>
        Enjoy fun and educational audio stories for kids of all ages!
      </p>
    </div>
  );
}

export default WelcomePage;
