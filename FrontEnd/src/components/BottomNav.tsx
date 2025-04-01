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
  <nav className="bottom-nav d-flex justify-content-around align-items-center">
    <Link to="/" className="nav-item text-light text-center flex-grow-1">
      <i className="bi bi-house fs-4 d-block"></i>
      <span className="small">Home</span>
    </Link>
    <Link to="/GoalManagement" className="nav-item text-light text-center flex-grow-1">
      <i className="bi bi-list-check fs-4 d-block"></i>
      <span className="small">Goals</span>
    </Link>
    <Link to="/LessonSelectionPage" className="nav-item text-light text-center flex-grow-1">
      <i className="bi bi-book fs-4 d-block"></i>
      <span className="small">Lessons</span>
    </Link>
  </nav>


  );
};

export default BottomNav;
