import React from "react";

function StoriesGrid({ stories }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {stories.map((story) => (
        <div
          key={story.id}
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={story.image}
            alt={story.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h4 style={{ marginTop: "10px" }}>{story.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default StoriesGrid;
