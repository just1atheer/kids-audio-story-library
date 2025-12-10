import React, { useState } from "react";

function AddStoryAndQuiz() {
  const [storyTitle, setStoryTitle] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const [quizQuestion, setQuizQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Story & Quiz Added Successfully 🎉");
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "700px",
        margin: "auto",
        background: "#f7f9ff",
        borderRadius: "15px",
        marginTop: "40px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "35px",
          marginBottom: "10px",
          color: "#4A4AFC",
        }}
      >
        📚 Add New Story
      </h1>

      <p style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
        Fill the details below to add a new story and quiz ✨
      </p>

      <form onSubmit={handleSubmit}>
        {/* STORY TITLE */}
        <label style={{ fontWeight: "600" }}>📘 Story Title:</label>
        <input
          type="text"
          value={storyTitle}
          onChange={(e) => setStoryTitle(e.target.value)}
          style={inputStyle}
          required
        />

        {/* AGE GROUP */}
        <label style={{ fontWeight: "600" }}>🎂 Age Group:</label>
        <select
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          style={inputStyle}
          required
        >
          <option value="">Select age group</option>
          <option value="3-5">3–5 years</option>
          <option value="5-8">5–8 years</option>
          <option value="8-12">8–12 years</option>
        </select>

        {/* AUDIO URL */}
        <label style={{ fontWeight: "600" }}>🎧 Audio URL:</label>
        <input
          type="text"
          value={audioUrl}
          onChange={(e) => setAudioUrl(e.target.value)}
          style={inputStyle}
          required
        />

        {/* COVER IMAGE URL */}
        <label style={{ fontWeight: "600" }}>🖼 Cover Image URL:</label>
        <input
          type="text"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
          style={inputStyle}
          required
        />

        <hr style={{ margin: "30px 0" }} />

        {/* QUIZ SECTION */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            color: "#FF7A59",
            marginBottom: "10px",
          }}
        >
          📝 Add Quiz Question
        </h2>

        <label style={{ fontWeight: "600" }}>❓ Question:</label>
        <input
          type="text"
          value={quizQuestion}
          onChange={(e) => setQuizQuestion(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={{ fontWeight: "600" }}>🔹 Option 1:</label>
        <input
          type="text"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={{ fontWeight: "600" }}>🔹 Option 2:</label>
        <input
          type="text"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={{ fontWeight: "600" }}>🔹 Option 3:</label>
        <input
          type="text"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={{ fontWeight: "600" }}>✅ Correct Option (1–3):</label>
        <input
          type="number"
          min="1"
          max="3"
          value={correctOption}
          onChange={(e) => setCorrectOption(e.target.value)}
          style={inputStyle}
          required
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            background: "#6A5ACD",
            border: "none",
            color: "white",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          🎉 Add Story & Quiz
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0 20px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

export default AddStoryAndQuiz;