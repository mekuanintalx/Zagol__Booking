import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Zagol Booking</span>
        <div className="navItems">
          <button className="navButton">Register / Login </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
