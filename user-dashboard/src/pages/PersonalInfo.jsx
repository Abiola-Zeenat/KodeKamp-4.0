import { useState } from "react";

const PersonalInfo = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

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
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Personal information</h5>
        <p className="text-success2">2 of 3</p>
        <button className="btn btn-link text-dark close-btn">
          <i className="fa fa-times"></i>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder=" " // Empty placeholder
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
          <label htmlFor="fullName">Full name</label>
        </div>
        <div className="gender-container">
          <label>Gender:</label>
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
        <div className="mb-3">
          <i className="fa fa-info-circle info-icon"></i>
          <span>The phone number and birthday are only visible to you</span>
        </div>
        <div className="input-container phone-group">
          <select className="form-control">
            <option value="+598">+598</option>
            {/* Add more country codes as needed */}
          </select>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone number"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="date"
            className="form-control"
            id="birthday"
            placeholder=" " // Empty placeholder
            value={birthday}
            onChange={handleBirthdayChange}
          />
          <label htmlFor="birthday">Birthday</label>
          <span className="optional-label">Optional</span>
        </div>
        <div className="mb-3 text-muted">
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
