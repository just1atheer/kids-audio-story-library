import React from "react";
import { Link } from "react-router-dom";

function Age5to8Stories() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "#4f46e5", marginBottom: "30px" }}>
        Stories for Ages 5–8
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}
      >
        {/* قصة الخبز */}
        <Link to="/story-bread" style={{ textDecoration: "none" }}>
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
              src="https://i.imgur.com/Zt5rtuT.png"
              alt="Bread Story"
              style={{
                width: "60%",
                maxHeight: "160px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ color: "#4f46e5" }}>The Bread Story</h2>
            <p style={{ color: "#666" }}>A simple story about kindness.</p>
          </div>
        </Link>

        {/* قصة الكلب */}
        <Link to="/story-dog" style={{ textDecoration: "none" }}>
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
              src="https://i.imgur.com/uoPWfrf.png"
              alt="Dog Story"
              style={{
                width: "60%",
                maxHeight: "160px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ color: "#4f46e5" }}>The Dog Story</h2>
            <p style={{ color: "#666" }}>A fun adventure with a loyal dog.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Age5to8Stories;
