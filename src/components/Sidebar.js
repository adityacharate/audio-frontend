import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar({ onSectionChange }) {
  const [active, setActive] = useState("library"); // Default active section

  const handleClick = (section) => {
    setActive(section);
    onSectionChange(section);  // Notify parent (App.js)
  };

  return (
    <div className="sidebar">
      <ul>
        <li className={active === "library" ? "active" : ""} onClick={() => handleClick("library")}>
          Music Library
        </li>
        <li className={active === "upload" ? "active" : ""} onClick={() => handleClick("upload")}>
          Upload
        </li>
        <li className={active === "player" ? "active" : ""} onClick={() => handleClick("player")}>
          Player
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
