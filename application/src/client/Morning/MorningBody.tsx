import "./MorningBody.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FaPlus } from "react-icons/fa";

function MorningInputBody() {

  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };
  return (
    <main>
      <div className="morning-body-container">
        <div className="top-buttons">
          <button
            className="mode-button"
            onClick={() => handleButtonClick("/evening")}
          >
            MODE: Day
          </button>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </main>
  );
}

export default MorningInputBody;
