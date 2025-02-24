import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search for songs, artists..." />
      </div>
      <FaUser className="profile-icon" />
    </div>
  );
}

export default Navbar;
