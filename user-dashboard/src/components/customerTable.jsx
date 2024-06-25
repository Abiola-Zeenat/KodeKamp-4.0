//import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

const CustomerTable = () => {
  return (
    <div className="card m-5">
      <div className="p-4 d-flex justify-content-between align-items-center">
        <div>
          <h4 className="fw-bold text-dark">All customers</h4>
          <p className="text-success f-14">Active members</p>
        </div>
        <div className="d-flex gap-4">
          <input
            type="text"
            className="form-control bg-light"
            placeholder="search"
          />
          <div className="form-control bg-light">
            <label>sort by:</label>
            <select name="sort" id="sort" className="border-0 ms-2 bg-light">
              <option value="newest">Newest</option>
              <option value="newest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-responsive p-4 pt-0">
        <table className="table table-hover">
          <thead>
            <tr className="f-14">
              <th className="text-grey">Customer Name</th>
              <th className="text-grey">Company</th>
              <th className="text-grey">Phone Number</th>
              <th className="text-grey">Email</th>
              <th className="text-grey">Country</th>
              <th className="text-grey">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="table-row">
                <td className="f-14">{customer.name}</td>
                <td className="f-14">{customer.company}</td>
                <td className="f-14">{customer.phone}</td>
                <td className="f-14">{customer.email}</td>
                <td className="f-14">{customer.country}</td>
                <td className="f-14">
                  <span
                    className={`badge ${
                      customer.status === "Active"
                        ? "badge-success"
                        : "badge-danger"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex p-4 pt-0 justify-content-between align-items-center">
        <p className="f-14 text-grey">Showing data 1 to 8 of 256K entries</p>
        <div className="d-flex gap-2 align-items-center">
          <div>
            <button className="btn page-btn p-0">
              <FaChevronLeft />
            </button>
          </div>
          <div>
            <button className="btn page-btn p-0 active">1</button>
          </div>
          <div>
            <button className="btn page-btn p-0">2</button>
          </div>
          <div>
            <button className="btn page-btn p-0">3</button>
          </div>
          <div>
            <button className="btn page-btn p-0">4</button>
          </div>
          <div>...</div>
          <div>
            <button className="btn page-btn p-0">40</button>
          </div>
          <div>
            <button className="btn page-btn p-0">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
