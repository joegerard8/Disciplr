import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

type SidebarProps = {
  items: string[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the button click
  const handleReturnToMenu = () => {
    navigate("/"); // Navigate to the homepage route
  };

  return (
    <div className="sidebar">
      <button className="return-button" onClick={handleReturnToMenu}>
        Return To Home
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
