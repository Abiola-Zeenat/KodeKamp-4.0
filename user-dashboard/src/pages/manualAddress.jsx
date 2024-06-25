//import React from 'react'
import close from "../assets/Iconclose.png";
import { useState } from "react";

const ManualAddress = ({ onNext }) => {
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [zipError, setZipError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!address) {
      setAddressError("Address is required");
      isValid = false;
    } else {
      setAddressError("");
    }

    if (!city) {
      setCityError("City is required");
      isValid = false;
    } else {
      setCityError("");
    }

    if (!state) {
      setStateError("State is required");
      isValid = false;
    } else {
      setStateError("");
    }

    if (!zip) {
      setZipError("ZIP code is required");
      isValid = false;
    } else {
      setZipError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
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
      <form onSubmit={handleSubmit}>
        <div className="input-container position-relative">
          <input
            type="text"
            className={`form-control ${addressError ? "is-invalid" : ""}`}
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="address">Street address</label>

          {address && (
            <i className="fa fa-check text-success position-absolute end-10 top-50 translate-middle-y"></i>
          )}
          <div className="invalid-feedback">{addressError}</div>
        </div>
        <div className=" input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Apartment"
            value={apartment}
            onChange={(e) => {
              setApartment(e.target.value);
            }}
          />
          <span className="optional-label">Optional</span>
        </div>
        <div className="input-container position-relative">
          <input
            type="text"
            className={`form-control ${cityError ? "is-invalid" : ""}`}
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="city">City</label>
          {city && (
            <i className="fa fa-check text-success position-absolute end-10 top-50 translate-middle-y"></i>
          )}
          <div className="invalid-feedback">{cityError}</div>
        </div>
        <div className="d-flex align-items-center gap-4">
          <div className="input-container position-relative">
            <input
              type="text"
              className={`form-control ${stateError ? "is-invalid" : ""}`}
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="state">State</label>
            {state && (
              <i className="fa fa-check text-success position-absolute end-10 top-50 translate-middle-y"></i>
            )}
            <div className="invalid-feedback">{stateError}</div>
          </div>
          <div className="input-container position-relative">
            <input
              type="text"
              className={`form-control ${zipError ? "is-invalid" : ""}`}
              placeholder="ZIP code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <label htmlFor="zip">Zip</label>
            {zip && (
              <i className="fa fa-check text-success position-absolute end-10 top-50 translate-middle-y"></i>
            )}
            <div className="invalid-feedback">{zipError}</div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100 custom-btn mt-5">
          Save information
        </button>
      </form>
    </div>
  );
};

export default ManualAddress;
