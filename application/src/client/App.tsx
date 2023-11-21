import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/Login.tsx";
import Statistics from "./Statistics/Statistics.tsx";
import Evening from "./Evening/Evening.tsx";
import Morning from "./Morning/Morning.tsx";
import Blog from "./Blog/Blog.tsx";
import Profile from "./Profile/Profile.tsx";
import Sleep from "./Sleep/Sleep.tsx";
import { useState, useEffect } from "react";

function App() {
  const [switchValue, setSwitchValue] = useState("A");
  useEffect(() => {
    const storedValue = sessionStorage.getItem("switchValue");
    if (storedValue) {
      setSwitchValue(storedValue);
    }
  }, [setSwitchValue]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <Login switchValue={switchValue} setSwitchValue={setSwitchValue} />
          }
        />
        <Route path="/statistics" element={<Statistics />} />
        <Route
          path="/evening"
          element={<Evening switchValue={switchValue} />}
        />
        <Route path="/morning" element={<Morning />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sleep" element={<Sleep />} />
      </Routes>
    </>
  );
}

export default App;
