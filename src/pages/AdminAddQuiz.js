import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAddQuiz() {
  const navigate = useNavigate();

  const [storyId, setStoryId] = useState("");
  const [title, setTitle] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", ""], correct: 0 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const quizData = {
      id: Date.now(),
      story_id: Number(storyId),
      title,
      target_age_group: ageGroup,
      questions,
    };

    // حفظ في localStorage
    const existing = JSON.parse(localStorage.getItem("quizzes")) || [];
    existing.push(quizData);

    localStorage.setItem("quizzes", JSON.stringify(existing));

    alert("Quiz added successfully!");
    navigate("/admin");
  };

  const updateQuestionText = (index, value) => {
    const updated = [...questions];
    updated[index].text = value;
    setQuestions(updated);
  };

  const updateOption = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const updateCorrect = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].correct = Number(value);
    setQuestions(updated);
  };

  return (
    <div
      style={{
        paddingTop: "80px",
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #fff8ff, #ffe6f7)",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        📝 Add Quiz (Admin)
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "450px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <label>Story ID</label>
        <input
          type="number"
          value={storyId}
          onChange={(e) => setStoryId(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <label>Quiz Title</label>
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
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        >
          <option value="">Select...</option>
          <option value="3-5">3-5</option>
          <option value="6-8">6-8</option>
          <option value="9-12">9-12</option>
        </select>

        <h3 style={{ marginTop: "20px" }}>Questions</h3>

        {questions.map((q, qIndex) => (
          <div key={qIndex} style={{ marginBottom: "25px" }}>
            <label>Question {qIndex + 1}</label>
            <input
              type="text"
              value={q.text}
              onChange={(e) => updateQuestionText(qIndex, e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <h4>Options</h4>

            {q.options.map((opt, optIndex) => (
              <input
                key={optIndex}
                type="text"
                value={opt}
                onChange={(e) =>
                  updateOption(qIndex, optIndex, e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
            ))}

            <label>Correct Option (0,1,2)</label>
            <input
              type="number"
              value={q.correct}
              onChange={(e) => updateCorrect(qIndex, e.target.value)}
              style={{ width: "100%", padding: "10px" }}
            />
          </div>
        ))}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#ff4fa3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginTop: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Add Quiz
        </button>
      </form>
    </div>
  );
}

export default AdminAddQuiz;
