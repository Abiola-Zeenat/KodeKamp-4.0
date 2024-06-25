//import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import icon from "../assets/logoIcon.png";
import dashboard from "../assets/Dashboard.png";
import customers from "../assets/customers.png";
import income from "../assets/income.png";
import product from "../assets/product.png";
import promote from "../assets/promote.png";
import help from "../assets/help.png";
import pro from "../assets/AccessPro.png";
import user from "../assets/user.png";

const menus = [
  { src: dashboard, text: "Dashboard" },
  { src: product, text: "Product" },
  { src: customers, text: "Customers" },
  { src: income, text: "Income" },
  { src: promote, text: "Promote" },
  { src: help, text: "Help" },
];

const Sidebar = ({ isMinimized, toggleSidebar }) => {
  return (
    <div
      className={`d-flex flex-column justify-content-between bg-white flex-shrink-0 
                     offcanvas-xs offcanvas-start side-container ${
                       isMinimized ? "sidebar-minimized" : ""
                     }`}
      style={{ width: isMinimized ? "100px" : "300px" }}
    >
      <div className="d-flex align-items-center me-md-auto logo ">
        {isMinimized ? (
          <img src={icon} alt="dashboard" />
        ) : (
          <>
            <img src={logo} alt="dashboard" />
            <span className="fw-light pt-2 ms-1">v0.1</span>
          </>
        )}
      </div>

      <ul className="nav nav-pills flex-column gap-4 mb-auto">
        {menus.map((menu, index) => (
          <li key={index} className="nav-item ">
            <a
              href="#"
              className={`nav-link ${
                index === 2 ? "active" : ""
              } d-flex align-items-center justify-content-between`}
              title={menu.text}
            >
              <div>
                <img src={menu.src} alt="icon" />
                <span className={`menu-text ${isMinimized ? "d-none" : ""}`}>
                  {menu.text}
                </span>
              </div>
              {menu.text === "Dashboard" ? (
                ""
              ) : (
                <FaChevronRight
                  className={`${isMinimized ? "d-none" : ""}`}
                  style={{ color: "#9197b3" }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
      <div className="d-flex flex-column gap-5">
        <img src={pro} alt="cta" className={`${isMinimized ? "d-none" : ""}`} />
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <img src={user} alt="a-man-emoji" />
            <div className={`ms-2 ${isMinimized ? "d-none" : ""}`}>
              <p className="mb-0 f-14 text-dark">Evano</p>
              <small className="f-12 text-grey">Project manager</small>
            </div>
          </div>
          <FaChevronDown className={`${isMinimized ? "d-none" : ""}`} />
        </div>
      </div>
      <button
        className="btn btn-light mt-4"
        onClick={toggleSidebar}
        style={{ marginTop: "auto" }}
      >
        {isMinimized ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </div>
  );
};

export default Sidebar;
