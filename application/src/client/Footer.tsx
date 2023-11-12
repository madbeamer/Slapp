import "./Footer.css";
import { FaChartBar, FaClipboardCheck, FaBook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <button className="footer-button">
          <FaChartBar size={24} />
        </button>
        <button className="footer-button">
          <FaClipboardCheck size={24} />
        </button>
        <button className="footer-button">
          <FaBook size={24} />
        </button>
      </footer>
    </>
  );
}

export default Footer;
