import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ParentDashboard() {
  // الأطفال من التخزين (فقط اللي يضيفهم المستخدم)
  const [children, setChildren] = useState([]);

  // الطفل النشط
  const [activeChildId, setActiveChildId] = useState(
    localStorage.getItem("activeChildId") || null
  );

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("children")) || [];
    setChildren(saved);
  }, []);

  // حفظ الطفل المختار
  const selectChild = (id) => {
    localStorage.setItem("activeChildId", id);
    setActiveChildId(id);
    alert("Child selected successfully!");
  };

  // حذف طفل
  const deleteChild = (id) => {
    const updated = children.filter((c) => c.id !== id);
    setChildren(updated);
    localStorage.setItem("children", JSON.stringify(updated));

    // لو كان الطفل المحذوف هو المختار، نشيله
    if (activeChildId == id) {
      localStorage.removeItem("activeChildId");
      setActiveChildId(null);
    }

    alert("Child deleted.");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#4f46e5", marginBottom: "20px" }}>
        👨‍👧 Parent Dashboard
      </h1>

      {/* زر إضافة طفل */}
      <Link to="/add-child">
        <button
          style={{
            background: "#4f46e5",
            color: "white",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        >
          ➕ Add Child
        </button>
      </Link>

      {/* زر الذهاب للبروقرس */}
      <Link to="/progress">
        <button
          style={{
            background: "#22c55e",
            color: "white",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginLeft: "15px",
          }}
        >
          📊 View Progress
        </button>
      </Link>

      {/* عرض الأطفال */}
      <div style={{ marginTop: "30px" }}>
        {children.length === 0 ? (
          <p style={{ color: "#777" }}>No children added yet.</p>
        ) : (
          children.map((child) => (
            <div
              key={child.id}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={child.avatarUrl}
                alt="avatar"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#4f46e5" }}>{child.name}</h3>
                <p>Age: {child.age}</p>
                <p>Age Group: {child.age_group}</p>
              </div>

              {/* زر تحديد الطفل */}
              <button
                onClick={() => selectChild(child.id)}
                style={{
                  background:
                    activeChildId == child.id ? "#16a34a" : "#3b82f6",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                {activeChildId == child.id ? "Selected" : "Select"}
              </button>

              {/* زر حذف الطفل */}
              <button
                onClick={() => deleteChild(child.id)}
                style={{
                  background: "#dc2626",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                🗑 Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
