import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAddStory() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storyData = {
      id: Date.now(),
      title,
      age_group: ageGroup,
      audio_url: audioUrl,
      cover_image_url: coverImage,
    };

    // حفظ في localStorage
    const existing = JSON.parse(localStorage.getItem("stories")) || [];
    existing.push(storyData);

    localStorage.setItem("stories", JSON.stringify(existing));

    alert("Story added successfully!");
    navigate("/admin");
  };

  return (
    <div
      style={{
        paddingTop: "80px",
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #fdfbff, #f5eaff)",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "30px" }}>
        📘 Add Story (Admin)
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          margin: "0 auto",
          textAlign: "left",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <label>Story Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <label>Age Group</label>
        <select
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        >
          <option value="">Select...</option>
          <option value="3-5">3-5</option>
          <option value="6-8">6-8</option>
          <option value="9-12">9-12</option>
        </select>

        <label>Audio URL</label>
        <input
          type="text"
          value={audioUrl}
          onChange={(e) => setAudioUrl(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <label>Cover Image URL</label>
        <input
          type="text"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "25px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#6a0dad",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Add Story
        </button>
      </form>
    </div>
  );
}

export default AdminAddStory;
