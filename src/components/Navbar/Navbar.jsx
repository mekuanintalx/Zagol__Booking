import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleClick}>
          Zagol Booking
        </span>
        <div className="navItems">
          <button className="navButton">Register / Login </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
