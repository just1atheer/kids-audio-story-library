import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// الصفحات الأساسية
import SelectRolePage from "./pages/SelectRolePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage"; // صفحة اليوزر الجديدة

// الأدمن
import AdminHome from "./pages/AdminHome";
import AdminAddStory from "./pages/AddStoryAndQuiz";

// الباقي مثل القصص والكويز
import StoriesPage from "./pages/StoriesPage";
import Story from "./pages/Story";
import QuizPage from "./pages/QuizPage";

// الوالد
import ParentDashboard from "./pages/ParentDashboard";
import AddChildPage from "./pages/AddChildPage";
import ParentProgress from "./pages/ParentProgress";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* 🔥 أول صفحة تظهر */}
        <Route path="/" element={<SelectRolePage />} />

        {/* تسجيل الدخول */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* صفحة الهوم الجديدة لليوزر */}
        <Route path="/home" element={<HomePage />} />

        {/* الأدمن */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/add-story" element={<AdminAddStory />} />

        {/* قصص */}
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/quiz/:id" element={<QuizPage />} />

        {/* الوالد */}
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/add-child" element={<AddChildPage />} />
        <Route path="/progress" element={<ParentProgress />} />

      </Routes>
    </Router>
  );
}

export default App;
