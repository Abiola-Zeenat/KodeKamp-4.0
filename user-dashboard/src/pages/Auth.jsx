import { useState } from "react";
import apple from "../assets/Apple.png";
import facebook from "../assets/Facebook.png";
import google from "../assets/Google.png";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailValid(isValid);
    setEmailError(isValid ? "" : "Please enter a valid email address.");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const isValid = value.length >= 8;
    setPasswordValid(isValid);
    setPasswordError(
      isValid ? "" : "Password must be at least 8 characters long."
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid) {
      alert("Form submitted successfully!");
    } else {
      if (!emailValid) {
        setEmailError("Please enter a valid email address.");
      }
      if (!passwordValid) {
        setPasswordError("Password must be at least 8 characters long.");
      }
      if (!email && !password) {
        alert("please fill out the email and password!");
      }
    }
  };

  return (
    <div className="container auth-container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={`nav-link me-3 ${isRegister ? "active" : ""}`}
              href="#"
              onClick={() => setIsRegister(true)}
            >
              Register
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${!isRegister ? "active" : ""}`}
              href="#"
              onClick={() => setIsRegister(false)}
            >
              Log in
            </a>
          </li>
        </ul>
        <button className="btn btn-link text-dark close-btn">
          <i className="fa fa-times"></i>
        </button>
      </div>
      <div>
        <div className="social-buttons mb-4 mt-4 grid gap-3">
          <img src={apple} alt="apple-logo" />
          <img src={facebook} alt="facebook-logo" />
          <img src={google} alt="google-logo" />
        </div>
        <p className="fw-bold">
          or {isRegister ? "register" : "login"} with email
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container position-relative">
          <input
            type="email"
            className={`form-control ${
              emailValid ? "is-valid" : email ? "is-invalid" : ""
            }`}
            id="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">Email address</label>

          {emailValid && (
            <i className="fa fa-check text-success position-absolute end-10 top-50 translate-middle-y"></i>
          )}
          {!emailValid && email && (
            <div className="invalid-feedback">{emailError}</div>
          )}
        </div>
        <div className="input-container position-relative mb-0">
          <div className="input-groups">
            <input
              type={passwordVisible ? "text" : "password"}
              className={`form-control ${
                passwordValid ? "is-valid" : password ? "is-invalid" : ""
              }`}
              id="password"
              placeholder="********"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="btn eye-btn"
            >
              <i
                className={`eye fa ${
                  passwordVisible ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </button>
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>

          {!passwordValid && password && (
            <div className="invalid-feedback">{passwordError}</div>
          )}
        </div>
        {isRegister && (
          <label className="fw-bold mt-0 mb-4">8+ characters</label>
        )}
        <button
          type="submit"
          className={`btn btn-primary w-100 custom-btn ${
            isRegister ? " " : "mt-4"
          }`}
        >
          {isRegister ? "Create account" : "Login to Dashboard"}
        </button>
        <div className="form-check mt-3">
          <input type="checkbox" className="form-check-input" id="promo" />
          <label className="form-check-label mb-4" htmlFor="promo">
            {isRegister ? "Send me news and promotions" : "Remember me"}
          </label>
        </div>
        <p className="mt-3 text-center terms">
          {isRegister && (
            <>
              By continuing I agree with the <a href="#">Terms & Conditions</a>,
              <br />
              <a href="#">Privacy Policy</a>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Auth;
