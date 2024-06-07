//import React from "react";
import Logo from "../assets/logoblack.png";
import { Link } from "react-router-dom";

const navLinks = ["main", "gallery", "projects", "certifications", "contacts"];

export default function NavBar() {
  return (
    <div className="nav flex">
      <img src={Logo} alt="Logo" width={70} height={45} />
      <div className="nav-items">
        <ul className="flex">
          {/* {navLinks.map((link, index) => (
            <li key={index}>
              {link == "main" ? (
                <Link to="/">{link}</Link>
              ) : link == "gallery" ? (
                <Link to="/gallery">{link}</Link>
              ) : link == "projects" ? (
                <Link to="/projects">{link}</Link>
              ) : (
                { link }
              )}
            </li>
          ))} */}
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>certifications</li>
          <li>contacts</li>
        </ul>
      </div>
    </div>
  );
}
