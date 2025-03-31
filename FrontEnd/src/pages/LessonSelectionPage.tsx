import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "./LinkSelectionPage.css"; // Import the CSS file

const LinksPage: React.FC = () => {
  return (
    <div className="links-page">
      <h1>Welcome to the Lessons</h1>
      <ul>
        <li>
          <Link to="/lesson1">Go to Lesson 1</Link>
        </li>
        <li>
          <Link to="/lesson2">Go to Lesson 2 (Change to 2 when done)</Link>
        </li>
        <li>
          <Link to="/lesson3">Go to Lesson 3</Link>
        </li>
      </ul>
      <BottomNav />
    </div>
  );
};

export default LinksPage;
