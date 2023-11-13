import "./Header.css";
import { FaMoon, FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Get the current location from React Router
  const shouldRenderBottom =
    location.pathname === "/evening" || location.pathname === "/morning";
  // Function to determine the text based on the route
  const getHeaderText = () => {
    switch (location.pathname) {
      case "/":
        return "Login";
      case "/evening":
        return "Evening";
      case "/statistics":
        return "Statistics";
      case "/blog":
        return "Blog";
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
            <FaUser size={24} />
          </div>
        </div>
        {shouldRenderBottom && (
          <div className="bottom">
            <button className="mode-button">MODE: Night</button>
            <button className="submit-button">Submit</button>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
