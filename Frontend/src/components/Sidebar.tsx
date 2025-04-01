import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

type SidebarProps = {
  items: { label: string; anchor: string }[];
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
          <li key={index}>
            <a href={`#${item.anchor}`} className="sidebar-link">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
