import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const BottomNav: React.FC = () => {
  // Define the handleLogout function
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("authToken"); // Clear any stored user data
  };

  return (
    <nav className="bottom-nav">
      <Link to="/" className="nav-item">
        <i className="bi bi-house"></i>
        <span>Home</span>
      </Link>
      <Link to="/GoalsInterface" className="nav-item">
        <i className="bi bi-search"></i>
        <span>Goals</span>
      </Link>
      <Link to="/LessonSelectionPage" className="nav-item">
        <i className="bi bi-search"></i>
        <span>Lessons</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
