import React from "react";
import { Link } from "react-router-dom";

function Age8to12Stories() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "#4f46e5", marginBottom: "30px" }}>
        Stories for Ages 8–12
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}
      >

        {/* قصة الأسد */}
        <Link to="/story-lion" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="https://i.imgur.com/mf1lUjA.png"
              alt="Lion Story"
              style={{
                width: "60%",
                maxHeight: "160px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ color: "#4f46e5" }}>The Brave Lion</h2>
            <p style={{ color: "#666" }}>
              A story about courage and doing the right thing.
            </p>
          </div>
        </Link>

        {/* قصة الشمس والرياح */}
        <Link to="/story-sun-wind" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="https://i.imgur.com/rTwrXqQ.png"
              alt="Sun and Wind Story"
              style={{
                width: "60%",
                maxHeight: "160px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ color: "#4f46e5" }}>The Sun and the Wind</h2>
            <p style={{ color: "#666" }}>
              A story about kindness vs. force.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Age8to12Stories;
