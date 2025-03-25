import React from "react";
import "../App.css"; // Make sure this file exists

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <a href="#" className="nav-item">
        <i className="bi bi-house"></i>
        <span>Home</span>
      </a>
      <a href="#" className="nav-item">
        <i className="bi bi-search"></i>
        <span>Search</span>
      </a>
      <a href="#" className="nav-item">
        <i className="bi bi-plus-circle"></i>
        <span>Add</span>
      </a>
      <a href="#" className="nav-item">
        <i className="bi bi-bell"></i>
        <span>Alerts</span>
      </a>
      <a href="#" className="nav-item">
        <i className="bi bi-person"></i>
        <span>Profile</span>
      </a>
    </nav>
  );
};

export default BottomNav;
