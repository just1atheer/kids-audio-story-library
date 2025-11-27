import React, { useEffect, useState } from "react";

export default function ParentProgress() {
  const [children, setChildren] = useState([]);
  const [selectedChildId, setSelectedChildId] = useState(null);
  const [progressData, setProgressData] = useState({});

  // تحميل الأطفال + البروقرس من localStorage
  useEffect(() => {
    const savedChildren = JSON.parse(localStorage.getItem("children")) || [];
    setChildren(savedChildren);

    const savedProgress = JSON.parse(localStorage.getItem("progress")) || {};
    setProgressData(savedProgress);

    if (savedChildren.length > 0) {
      setSelectedChildId(savedChildren[0].id);
    }
  }, []);

  const selectedChild = children.find((c) => c.id === selectedChildId);

  const childProgress =
    progressData[selectedChildId] && progressData[selectedChildId].length > 0
      ? progressData[selectedChildId]
      : [];

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "#4f46e5", marginBottom: "20px" }}>
        📊 Progress Tracking
      </h1>

      {/* قائمة الأطفال */}
      <aside
        style={{
          marginBottom: "20px",
          background: "#f9fafb",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>Select Child</h3>

        {children.length === 0 ? (
          <p style={{ color: "#777" }}>No children added yet.</p>
        ) : (
          children.map((child) => (
            <button
              key={child.id}
              onClick={() => setSelectedChildId(child.id)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                background:
                  selectedChildId === child.id ? "#eef2ff" : "white",
                border:
                  selectedChildId === child.id
                    ? "2px solid #4f46e5"
                    : "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "left",
                cursor: "pointer",
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <img
                src={child.avatarUrl}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div>
                <strong>{child.name}</strong>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  Age: {child.age} — Group {child.age_group}
                </div>
              </div>
            </button>
          ))
        )}
      </aside>

      {/* جدول التقدم */}
      {selectedChild && (
        <main
          style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <h3 style={{ marginBottom: "15px" }}>
            {selectedChild.name}'s Progress
          </h3>

          {childProgress.length === 0 ? (
            <p style={{ color: "#777" }}>No progress yet.</p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "10px",
              }}
            >
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Story
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Quiz Score
                  </th>
                  <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {childProgress.map((row, index) => (
                  <tr key={index}>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      {row.storyTitle}
                    </td>

                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      {row.quizScore}
                    </td>

                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      {row.updatedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
      )}
    </div>
  );
}
