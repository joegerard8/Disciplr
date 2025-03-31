import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../App.css"; // Ensure this file exists

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/homePage" className="nav-item">
        {" "}
        {/* Navigate to home */}
        <i className="bi bi-house"></i>
        <span>Home</span>
      </Link>
      <Link to="/search" className="nav-item">
        <i className="bi bi-search"></i>
        <span>Search</span>
      </Link>
      <Link to="/add" className="nav-item">
        <i className="bi bi-plus-circle"></i>
        <span>Add</span>
      </Link>
      <Link to="/alerts" className="nav-item">
        <i className="bi bi-bell"></i>
        <span>Alerts</span>
      </Link>
      <Link to="/profile" className="nav-item">
        <i className="bi bi-person"></i>
        <span>Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
