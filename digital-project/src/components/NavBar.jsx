//import React from "react";
import Logo from "../assets/logoblack.png";

const navLinks = ["main", "gallery", "projects", "certifications", "contacts"];

export default function NavBar() {
  return (
    <div className="nav flex">
      <img src={Logo} alt="Logo" width={70} height={45} />
      <div className="nav-items">
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
