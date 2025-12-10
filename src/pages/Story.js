import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Story() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [story, setStory] = useState(null);

  useEffect(() => {
    const stories = JSON.parse(localStorage.getItem("stories")) || [];
    const found = stories.find((s) => s.id === Number(id));
    setStory(found);
  }, [id]);

  if (!story) return <h2>Story not found</h2>;

  const goToQuiz = () => {
    navigate(`/quiz/${story.id}`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{story.title}</h1>

      <img
        src={story.cover_image_url}
        alt={story.title}
        style={{ width: "300px", borderRadius: "10px", marginBottom: "20px" }}
      />

      <h3>Audio:</h3>
      <audio controls style={{ marginBottom: "20px" }}>
        <source src={story.audio_url} type="audio/mp3" />
      </audio>

      <br />

      <button
        onClick={goToQuiz}
        style={{
          padding: "12px 20px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Start Quiz →
      </button>
    </div>
  );
}

export default Story;
