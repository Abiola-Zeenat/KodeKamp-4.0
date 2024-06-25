//import React from 'react'
import success from "../assets/Framesuccess.png";
// import close from "../assets/Iconclose.png";

const Success = () => {
  return (
    <div className="container auth-container p-0 mt-5">
      <div>
        <img src={success} alt="successful" className="img-fluid" />
      </div>
      <div className="p-5">
        <h1 className="fw-bold fs-1 success">
          You are successfully registered!
        </h1>
        <button type="submit" className="btn btn-primary w-100 custom-btn mt-5">
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Success;
