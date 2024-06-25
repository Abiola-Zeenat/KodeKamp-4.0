import { useState } from "react";
import close from "../assets/Iconclose.png";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const PersonalInfo = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState(null);

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleBirthdayChange = (e) => setBirthday(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    alert("Personal information submitted successfully!");
  };

  return (
    <div className="container auth-container mt-5">
      <div className="info d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-4 fw-bold">
          <h5 className="text-dark">Personal information</h5>
          <p className="text-success2 pt-2">2 of 3</p>
        </div>
        <button className="btn btn-link text-dark close-btn">
          <img src={close} alt="close" />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            className="form-control p-3"
            id="fullName"
            placeholder="Full name"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="d-flex align-items-center mb-4">
          <label className="me-2">Gender: </label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={gender === "Male"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={gender === "Female"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="mb-3 fw-bold f-13">
          <i className="fa fa-info-circle info-icon"></i>
          <span>The phone number and birthday are only visible to you</span>
        </div>
        <div className="mb-4 phone-group">
          <select className="form-control p-3">
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+598">+598</option>
            <option value="+598">+234</option>
          </select>
          <input
            type="text"
            className="form-control p-3"
            id="phone"
            placeholder="Phone number"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className=" input-group">
          <input
            type="date"
            className="form-control p-3"
            id="birthday"
            placeholder="Birthday"
            value={birthday}
            onChange={handleBirthdayChange}
          />
          <span className="optional-label">Optional</span>
        </div>
        <div className="mb-5 text-muted f-13">
          Let us know about your birthday so as not to miss a gift
        </div>
        <button type="submit" className="btn btn-primary w-100 custom-btn">
          Save information
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
