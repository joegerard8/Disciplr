import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "./LinkSelectionPage.css"; // Import the CSS file

const LinksPage: React.FC = () => {
  return (
    <>
    <div className="links-page">
      <h1>Select a lesson to start learning!</h1>
      <ul>
        <li>
          <Link to="/lesson1">Lesson 1</Link>
        </li>
        <li>
          <Link to="/lesson2">Lesson 2</Link>
        </li>
        <li>
          <Link to="/lesson3">Lesson 3</Link>
        </li>
      </ul>
    </div>
    <BottomNav />
    </>
  );
};

export default LinksPage;
