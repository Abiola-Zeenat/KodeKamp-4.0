//import React from "react";

import { useState } from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/header";
import customers from "../assets/Group-10.png";
import members from "../assets/Group-1.png";
import active from "../assets/Group-2.png";
import CustomerTable from "../components/customerTable";

const Dashboard = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className=" d-flex dashboard-container">
      <Sidebar isMinimized={isMinimized} toggleSidebar={toggleSidebar} />
      <div className={`flex-grow-1 ${isMinimized ? "content-expanded" : ""}`}>
        <Header />
        <div className="p-3 card m-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="d-flex bg-white align-items-center">
                <img src={customers} alt="" />
                <div className="card-body">
                  <h5 className="card-title f-14 text-grey">Total Customers</h5>
                  <h2 className="card-text fw-bold text-dark m-0">5,423</h2>
                  <small className="text-success">
                    <span className="fs-4">⬆</span> 16% this month
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="d-flex bg-white align-items-center">
                <img src={members} alt="" />
                <div className="card-body">
                  <h5 className="card-title f-14 text-grey">Members</h5>
                  <h2 className="card-text fw-bold text-dark m-0">1,893</h2>
                  <small className="text-danger">
                    <span className="fs-4">⬇</span> 1% this month
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="d-flex bg-white align-items-center">
                <img src={active} alt="" />
                <div className="card-body">
                  <h5 className="card-title f-14 text-grey">Active Now</h5>
                  <h2 className="card-text fw-bold text-dark m-0">189</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomerTable />
      </div>
    </div>
  );
};

export default Dashboard;
