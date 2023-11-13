import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login.tsx";
import Statistics from "./Statistics/Statistics.tsx";
import Evening from "./Evening/Evening.tsx";
import Blog from "./Blog/Blog.tsx";
import Profile from "./Profile/Profile.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/evening" element={<Evening />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
