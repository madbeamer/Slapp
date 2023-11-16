import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/Login.tsx";
import Statistics from "./Statistics/Statistics.tsx";
import Evening from "./Evening/Evening.tsx";
import Morning from "./Morning/Morning.tsx";
import Blog from "./Blog/Blog.tsx";
import Profile from "./Profile/Profile.tsx";
import Sleep from "./Sleep/Sleep.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/evening" element={<Evening />} />
        <Route path="/morning" element={<Morning />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sleep" element={<Sleep />} />
      </Routes>
    </>
  );
}

export default App;
