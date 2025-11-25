import React from "react";
import { useParams } from "react-router-dom";
import { mockStories } from "../data/mockData";

function Story() {
  const { id } = useParams();
  const story = mockStories.find((s) => s.id === parseInt(id));

  if (!story) return <h2>Story not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{story.title}</h1>

      <img 
        src={story.img} 
        alt={story.title} 
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <h3>Transcript:</h3>
      <p>{story.transcript}</p>

      <h3>Audio:</h3>
      <audio controls>
        <source src={story.audioUrl} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Story;
