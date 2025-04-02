import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "./LinkSelectionPage.css"; // Import the CSS file

const LinksPage: React.FC = () => {
  return (
    <>
      <div className="links-page">
        <div className="header-banner">
          <h1>Select a lesson to start learning!</h1>
        </div>
        <ul className="lesson-list">
          <li className="lesson-item">
            <Link to="/lesson1">Lesson 1</Link>
          </li>
          <li className="lesson-item">
            <Link to="/lesson2">Lesson 2</Link>
          </li>
          <li className="lesson-item">
            <Link to="/lesson3">Lesson 3</Link>
          </li>
        </ul>
      </div>
      <BottomNav />
    </>
  );
};

export default LinksPage;
