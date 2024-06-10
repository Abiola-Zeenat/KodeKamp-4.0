import Button from "./Button";
import contact from "../assets/contact.png";

const Contacts = () => {
  return (
    <div className="contact-container  wrap">
      <h1 className="light-weight">Contact Us</h1>
      <div className=" flex contact-form">
        <form method="post" className="flex-column">
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div className="required">
            <input type="text" placeholder="Phone Number " required />
            <span
              style={{
                color: "red",
                marginLeft: "-320px",
                pointerEvents: "none",
              }}
            >
              *
            </span>
          </div>
          <div className="required">
            <input type="text" placeholder="Email" required />
            <span
              style={{
                color: "red",
                marginLeft: "-375px",
                pointerEvents: "none",
              }}
            >
              *
            </span>
          </div>
          <div>
            <input type="text" placeholder="Interested In" />
          </div>

          <div className="required">
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="5"
              required
            ></textarea>
            <span
              style={{
                color: "red",
                marginLeft: "-358px",
                position: "relative",
                top: "-92px",
                pointerEvents: "none",
              }}
            >
              *
            </span>
          </div>
          <Button text="SEND EMAIL" className="all-project contact" />
        </form>
        <div>
          <img src={contact} alt="a man calling" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
