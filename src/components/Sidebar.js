import React from "react";
import { FaHome, FaMusic, FaUpload } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">🎵 MyMusic</div>
      <ul className="menu">
        <li>
          <FaHome className="icon" />
          Home
        </li>
        <li>
          <FaMusic className="icon" />
          Library
        </li>
        <li>
          <FaUpload className="icon" />
          Upload
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
