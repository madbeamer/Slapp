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
  const [testerID, setTesterID] = useState(
    sessionStorage.getItem("testerID") === null
      ? ""
      : (sessionStorage.getItem("testerID") as string)
  );
  const [testeeID, setTesteeID] = useState(
    sessionStorage.getItem("testeeID") === null
      ? ""
      : (sessionStorage.getItem("testeeID") as string)
  );

  useEffect(() => {
    const switchValueStorage = sessionStorage.getItem("switchValue");
    if (switchValueStorage) {
      setSwitchValue(switchValueStorage);
    }
  }, [setSwitchValue]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <Login
              switchValue={switchValue}
              setSwitchValue={setSwitchValue}
              testerID={testerID}
              setTesterID={setTesterID}
              testeeID={testeeID}
              setTesteeID={setTesteeID}
            />
          }
        />
        <Route path="/statistics" element={<Statistics />} />
        <Route
          path="/evening"
          element={
            <Evening
              switchValue={switchValue}
              testerID={testerID}
              testeeID={testeeID}
            />
          }
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
