import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddChildPage() {
  const navigate = useNavigate();
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [ageGroup, setAgeGroup] = useState("");   // 🔥 خانة الفئة العمرية الجديدة
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const avatars = [
    "https://i.imgur.com/Zj4y3Y5.png",
    "https://i.imgur.com/nvTfRmU.png",
    "https://i.imgur.com/pHafmWa.png",
    "https://i.imgur.com/Iayz0rk.png",
    "https://i.imgur.com/1NKG04v.png",
    "https://i.imgur.com/eqZ8vIS.png",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedAvatar) {
      alert("Please choose an avatar!");
      return;
    }

    if (!ageGroup) {
      alert("Please select age group!");
      return;
    }

    const newChild = {
      id: Date.now(),
      name: childName,
      age: childAge,
      age_group: ageGroup,   // 🔥 نضيف age group للطفل
      avatarUrl: selectedAvatar,
    };

    const existing = JSON.parse(localStorage.getItem("children")) || [];
    existing.push(newChild);
    localStorage.setItem("children", JSON.stringify(existing));

    navigate("/parent");
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "#4f46e5", marginBottom: "20px" }}>➕ Add New Child</h1>

      <form onSubmit={handleSubmit}>

        {/* الاسم */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Child Name:
          <input
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </label>

        {/* العمر */}
        <label style={{ display: "block", marginBottom: "20px" }}>
          Child Age:
          <input
            type="number"
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </label>

        {/* 🔥 الفئة العمرية الجديدة */}
        <label style={{ display: "block", marginBottom: "20px" }}>
          Age Group:
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          >
            <option value="">-- Select Age Group --</option>
            <option value="3-5">3 - 5 Years</option>
            <option value="5-8">5 - 8 Years</option>
            <option value="8-12">8 - 12 Years</option>
          </select>
        </label>

        {/* الافاتار */}
        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
          Choose Avatar:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          {avatars.map((url) => (
            <img
              key={url}
              src={url}
              alt=""
              onClick={() => setSelectedAvatar(url)}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                cursor: "pointer",
                border:
                  selectedAvatar === url
                    ? "4px solid #4f46e5"
                    : "2px solid #ccc",
                mixBlendMode: "multiply",
                backgroundColor: "transparent",
                objectFit: "cover",
              }}
            />
          ))}
        </div>

        {/* أزرار */}
        <button
          type="submit"
          style={{
            background: "#4f46e5",
            color: "white",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save Child
        </button>

        <button
          type="button"
          onClick={() => navigate("/parent")}
          style={{
            marginLeft: "10px",
            background: "#9ca3af",
            color: "white",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
