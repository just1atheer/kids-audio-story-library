import React from "react";
import { Link } from "react-router-dom";

function StoriesPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "#4f46e5", marginBottom: "30px" }}>
        Choose Age Group
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "35px",
        }}
      >

        {/* كرت فئة 3–5 */}
        <Link to="/age-3-5" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#fff",
              padding: "30px",
              height: "200px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#4f46e5", marginBottom: "10px" }}>Ages 3–5</h2>
            <p style={{ color: "#666" }}>Short and simple stories for little kids.</p>
          </div>
        </Link>

        {/* كرت فئة 5–8 */}
        <Link to="/age-5-8" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#fff",
              padding: "30px",
              height: "200px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#4f46e5", marginBottom: "10px" }}>Ages 5–8</h2>
            <p style={{ color: "#666" }}>
              Stories with simple adventures and lessons.
            </p>
          </div>
        </Link>

        {/* كرت فئة 8–12 */}
        <Link to="/age-8-12" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "#fff",
              padding: "30px",
              height: "200px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#4f46e5", marginBottom: "10px" }}>Ages 8–12</h2>
            <p style={{ color: "#666" }}>
              Longer stories with deeper ideas for older kids.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default StoriesPage;
