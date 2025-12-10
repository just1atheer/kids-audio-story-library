import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// ⭐ الصفحات الأساسية
import SelectRolePage from "./pages/SelectRolePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

// ⭐ الأدمن
import AdminHome from "./pages/AdminHome";
import AdminAddStory from "./pages/AddStoryAndQuiz";

// ⭐ القصص والفئات 3–5
import Age3to5Stories from "./pages/Age3to5Stories";
import Story3to5Soup from "./pages/Story3to5Soup";
import StoryIceCream from "./pages/StoryIceCream";
import QuizSoup from "./pages/QuizSoup";
import QuizIceCream from "./pages/QuizIceCream";

// ⭐ الفئة 5–8
import Age5to8Stories from "./pages/Age5to8Stories";
import Story5to8Bread from "./pages/Story5to8Bread";
import Story5to8Dog from "./pages/Story5to8Dog";
import QuizBread from "./pages/QuizBread";
import QuizDog from "./pages/QuizDog";

// ⭐ الفئة 8–12
import Age8to12Stories from "./pages/Age8to12Stories";
import Story8to12Lion from "./pages/Story8to12Lion";
import Story8to12SunWind from "./pages/Story8to12SunWind";
import QuizLion from "./pages/QuizLion";
import QuizSunWind from "./pages/QuizSunWind";

// ⭐ الصفحات الديناميكية
import StoriesPage from "./pages/StoriesPage";
import Story from "./pages/Story";
import QuizPage from "./pages/QuizPage";

// ⭐ الوالد
import ParentDashboard from "./pages/ParentDashboard";
import AddChildPage from "./pages/AddChildPage";
import ParentProgress from "./pages/ParentProgress";

function App() {
  return (
    <Router>

      {/* ⭐ Navbar يظهر في كل الصفحات ما عدا صفحة اختيار الدور "/" */}
      {window.location.pathname !== "/" && <Navbar />}

      <Routes>

        {/* ⭐ أول صفحة تظهر */}
        <Route path="/" element={<SelectRolePage />} />

        {/* تسجيل الدخول و التسجيل */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ⭐ صفحة الهوم لليوزر */}
        <Route path="/home" element={<HomePage />} />

        {/* ⭐ الأدمن */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/add-story" element={<AdminAddStory />} />

        {/* ⭐ صفحة اختيار الفئات */}
        <Route path="/stories" element={<StoriesPage />} />

        {/* ⭐ الفئة 3–5 */}
        <Route path="/age-3-5" element={<Age3to5Stories />} />
        <Route path="/story-soup" element={<Story3to5Soup />} />
        <Route path="/story-icecream" element={<StoryIceCream />} />
        <Route path="/quiz-soup" element={<QuizSoup />} />
        <Route path="/quiz-icecream" element={<QuizIceCream />} />

        {/* ⭐ الفئة 5–8 */}
        <Route path="/age-5-8" element={<Age5to8Stories />} />
        <Route path="/story-bread" element={<Story5to8Bread />} />
        <Route path="/story-dog" element={<Story5to8Dog />} />
        <Route path="/quiz-bread" element={<QuizBread />} />
        <Route path="/quiz-dog" element={<QuizDog />} />

        {/* ⭐ الفئة 8–12 */}
        <Route path="/age-8-12" element={<Age8to12Stories />} />
        <Route path="/story-lion" element={<Story8to12Lion />} />
        <Route path="/story-sunwind" element={<Story8to12SunWind />} />
        <Route path="/quiz-lion" element={<QuizLion />} />
        <Route path="/quiz-sunwind" element={<QuizSunWind />} />

        {/* ⭐ الصفحات الديناميكية */}
        <Route path="/story/:id" element={<Story />} />
        <Route path="/quiz/:id" element={<QuizPage />} />

        {/* ⭐ الوالد */}
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/add-child" element={<AddChildPage />} />
        <Route path="/progress" element={<ParentProgress />} />

      </Routes>
    </Router>
  );
}

export default App;
