import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveQuizScore } from "../utils/saveQuiz";

export default function QuizSoup() {
  const navigate = useNavigate();

  // جلب الطفل النشط
  const childId = localStorage.getItem("activeChildId");

  const question = "What was the mother making in the kitchen?";

  const options = [
    { id: 1, text: "Soup", isCorrect: true },
    { id: 2, text: "Cookies", isCorrect: false },
    { id: 3, text: "Salad", isCorrect: false },
  ];

  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState("");

  const checkAnswer = (option) => {
    setSelected(option.id);

    const score = option.isCorrect ? 100 : 0;

    setResult(option.isCorrect ? "Correct! 🎉" : "Wrong Answer ❌");

    // حفظ النتيجة
    saveQuizScore(childId, "Soup", score);

    // الانتقال لصفحة progress
    setTimeout(() => {
      navigate("/progress");
    }, 1000);
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "28px",
          marginBottom: "15px",
        }}
      >
        Quiz
        <span
          style={{
            background: "#1976D2",
            color: "white",
            padding: "4px 12px",
            borderRadius: "8px",
            fontSize: "18px",
          }}
        >
          1
        </span>
      </h2>

      <p style={{ fontSize: "20px", marginBottom: "20px" }}>{question}</p>

      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => checkAnswer(option)}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "12px",
            width: "100%",
            backgroundColor:
              selected === option.id
                ? option.isCorrect
                  ? "#4CAF50"
                  : "#E53935"
                : "#f7f7f7",
            border: "1px solid #ccc",
            cursor: "pointer",
            borderRadius: "10px",
            fontSize: "17px",
          }}
        >
          {option.text}
        </button>
      ))}

      <h3 style={{ marginTop: "25px", fontSize: "22px" }}>{result}</h3>
    </div>
  );
}
