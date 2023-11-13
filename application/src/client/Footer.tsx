import { useState } from "react";
import "./Footer.css";
import { FaChartBar, FaClipboardCheck, FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const [selectedButton, setSelectedButton] = useState(useLocation().pathname);

  const handleButtonClick = (path: string) => {
    setSelectedButton(path);
    navigate(path);
  };

  return (
    <>
      <footer>
        <button
          className={`footer-button ${
            selectedButton === "/statistics" ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("/statistics")}
        >
          <FaChartBar size={24} />
        </button>
        <button
          className={`footer-button ${
            selectedButton === "/evening" || selectedButton === "/morning"
              ? "selected"
              : ""
          }`}
          onClick={() => handleButtonClick("/evening")}
        >
          <FaClipboardCheck size={24} />
        </button>
        <button
          className={`footer-button ${
            selectedButton === "/blog" ? "selected" : ""
          }`}
          onClick={() => handleButtonClick("/blog")}
        >
          <FaBook size={24} />
        </button>
      </footer>
    </>
  );
}

export default Footer;
