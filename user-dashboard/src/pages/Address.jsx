import { useState } from "react";
import { BsGeoAlt } from "react-icons/bs";
import close from "../assets/Iconclose.png";
import search from "../assets/IconSearch.png";
import user from "../assets/IconUsers.png";
import cost from "../assets/IconDollar.png";
import time from "../assets/IconTime.png";

const Address = ({ onNext, onManualEntry }) => {
  const [addressSearch, setAddressSearch] = useState("");

  const handleManualEntry = () => {
    onManualEntry();
  };

  return (
    <div className="container auth-container mt-5">
      <div className="info d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-4 fw-bold">
          <h5 className="text-dark fw-bold mt-0">Add Address</h5>
          <p className="text-success2 pt-2">3 of 3</p>
        </div>
        <button className="btn btn-link text-dark close-btn">
          <img src={close} alt="close" />
        </button>
      </div>
      <form>
        <div className="position-relative">
          <img src={search} alt="close" className="search position-absolute" />

          <input
            type="text"
            className="form-control p-3 ps-5 search-input"
            placeholder="Search for address"
            value={addressSearch}
            onChange={(e) => setAddressSearch(e.target.value)}
          />
        </div>
        <div className="f-13 mb-5">
          Your address is not visible to other users
        </div>

        <div className="d-flex gap-4 align-items-center mb-5">
          <button
            type="button"
            className="btn border border-danger border-1 rounded-3 p-2 purpl"
          >
            <BsGeoAlt />
            <span className="ms-2 fw-bold mt-0 f-13 purpl">
              Use current location
            </span>
          </button>
          <button
            onClick={handleManualEntry}
            type="button"
            className="btn border border-danger border-1 rounded-3 p-2 purpl"
          >
            <span className="fw-bold mt-0 f-13 purpl"> Add manually</span>
          </button>
        </div>
        <div className="mb-3 mt-5">
          <h5 className="fw-bold text-dark m-lg mb-4">
            Sharing your address shows:
          </h5>
          <ul className="list-unstyled mt-2 fw-bold">
            <li className="mb-3">
              <img src={user} alt="people" className="me-2" /> People near you
            </li>
            <li className="mb-3">
              <img src={time} alt="clock" className="me-2" /> Estimated delivery
              time
            </li>
            <li className="mb-3">
              <img src={cost} alt="dollar" className="me-2" /> Estimate shipping
              costs
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Address;
