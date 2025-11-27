export function saveQuizScore(childId, storyTitle, score) {
  if (!childId) {
    console.error("No active child ID found!");
    return;
  }

  let progress = JSON.parse(localStorage.getItem("progress")) || {};

  if (!progress[childId]) {
    progress[childId] = [];
  }

  const existing = progress[childId].find(
    (p) => p.storyTitle === storyTitle
  );

  if (existing) {
    existing.quizScore = score + "%";
    existing.updatedAt = new Date().toISOString().split("T")[0];
  } else {
    progress[childId].push({
      storyTitle,
      quizScore: score + "%",
      updatedAt: new Date().toISOString().split("T")[0],
    });
  }

  localStorage.setItem("progress", JSON.stringify(progress));
}
