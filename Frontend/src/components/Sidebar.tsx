import React from "react";

type SidebarProps = {
  items: { label: string; anchor: string }[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="sidebar">
      <button className="return-button">Return To Menu</button>
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


  