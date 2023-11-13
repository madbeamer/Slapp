import "./Header.css";
import { FaMoon, FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  const location = useLocation(); // Get the current location from React Router

  // Function to determine the text based on the route
  const getHeaderText = () => {
    switch (location.pathname) {
      case "/":
        return "Login";
      case "/evening":
        return "Evening";
      case "/morning":
        return "Morning";
      case "/statistics":
        return "Statistics";
      case "/blog":
        return "Blog";
      case "/profile":
        return "Profile";
      default:
        return "Default";
    }
  };

  return (
    <>
      <header>
        <div className="top">
          <div className="left">
            <FaMoon size={24} />
          </div>
          <div className="middle">
            <span>{getHeaderText()}</span>
          </div>
          <div className="right">
            <FaUser size={24} onClick={() => handleButtonClick("/profile")} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
