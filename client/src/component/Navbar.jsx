import React from "react";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h1>
            <span>C</span>rud-<span>A</span>pplication
          </h1>
        </div>
        <div className="main-menu">
          <a href="/">
            Home
          </a>
        </div>
        <div className="main-search">
          <input type="text" placeholder="Search" className="search" />
          <button type="button">
            <IoSearch />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
