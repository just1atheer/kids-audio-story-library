import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main pages
import WelcomePage from "./pages/WelcomePage";
import StoriesPage from "./pages/StoriesPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";

// ===== AGE 3–5 =====
import Age3to5Stories from "./pages/Age3to5Stories";
import Story3to5Soup from "./pages/Story3to5Soup";
import StoryIceCream from "./pages/StoryIceCream";

// ===== AGE 5–8 =====
import Age5to8Stories from "./pages/Age5to8Stories";
import Story5to8Bread from "./pages/Story5to8Bread";
import Story5to8Dog from "./pages/Story5to8Dog";

// ===== AGE 8–12 =====
import Age8to12Stories from "./pages/Age8to12Stories";
import Story8to12Lion from "./pages/Story8to12Lion";
import Story8to12SunWind from "./pages/Story8to12SunWind";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* الصفحة الرئيسية */}
        <Route path="/" element={<WelcomePage />} />

        {/* صفحة الفئات */}
        <Route path="/stories" element={<StoriesPage />} />

        {/* AGE 3–5 */}
        <Route path="/age-3-5" element={<Age3to5Stories />} />
        <Route path="/story-soup" element={<Story3to5Soup />} />
        <Route path="/story-icecream" element={<StoryIceCream />} />

        {/* AGE 5–8 */}
        <Route path="/age-5-8" element={<Age5to8Stories />} />
        <Route path="/story-bread" element={<Story5to8Bread />} />
        <Route path="/story-dog" element={<Story5to8Dog />} />

        {/* AGE 8–12 */}
        <Route path="/age-8-12" element={<Age8to12Stories />} />
        <Route path="/story-lion" element={<Story8to12Lion />} />
        <Route path="/story-sun-wind" element={<Story8to12SunWind />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
