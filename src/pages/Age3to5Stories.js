import React from "react";
import { Link } from "react-router-dom";

function Age3to5Stories() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "#4f46e5", marginBottom: "30px" }}>
        Stories for Ages 3–5
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}
      >

        {/* قصة الشوربة */}
        <Link to="/story-soup" style={{ textDecoration: "none" }}>
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
              src="https://i.imgur.com/nCBzSyo.png"
              alt="Warm Soup"
              style={{
                width: "60%",
                maxHeight: "160px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ color: "#4f46e5" }}>Warm Soup</h2>
            <p style={{ color: "#666" }}>
              A cozy, gentle story for small kids.
            </p>
          </div>
        </Link>

        {/* قصة الآيسكريم */}
        <Link to="/story-icecream" style={{ textDecoration: "none" }}>
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
              src="https://i.imgur.com/H2dl4YC.png"
              alt="Ice Cream Girl"
              style={{
                width: "60%",
                maxHeight: "160px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ color: "#4f46e5" }}>Ice Cream Girl</h2>
            <p style={{ color: "#666" }}>
              A short, cute story about a little girl's favorite treat.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Age3to5Stories;
