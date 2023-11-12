import "./Header.css";
import { FaMoon, FaUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <header>
        <div className="top">
          <div className="left">
            <FaMoon size={24} />
          </div>
          <div className="middle">
            <span>Input</span>
          </div>
          <div className="right">
            <FaUser size={24} />
          </div>
        </div>
        <div className="bottom">
          <button className="mode-button">MODE: Night</button>
          <button className="submit-button">Submit</button>
        </div>
      </header>
    </>
  );
}

export default Header;
