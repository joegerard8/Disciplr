import React from "react";

type SidebarProps = {
  items: string[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="sidebar">
      <button className="return-button">Return To Menu</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

  