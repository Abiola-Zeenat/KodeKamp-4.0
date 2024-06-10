import React, { useState } from "react";
import Logo from "../../assets/logoblack.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

const navLinks = ["main", "gallery", "projects", "certifications", "contacts"];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav flex wrap">
      <img src={Logo} alt="Logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link === "main" ? (
                <Link to="/">{link}</Link>
              ) : link === "gallery" ? (
                <Link to="/gallery">{link}</Link>
              ) : link === "projects" ? (
                <Link to="/projects">{link}</Link>
              ) : (
                <Link to={`/${link}`}>{link}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
