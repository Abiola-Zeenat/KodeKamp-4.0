import aboutTop from "../assets/aboutTop.png";
import aboutlow from "../assets/aboutlow.png";
import about from "../assets/about.png";
import Button from "./Button";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <div className="split-image">
          <img src={aboutTop} alt="Logo" />
          <img src={aboutlow} alt="Logo" />
        </div>
        <img src={about} alt="Logo" />
      </div>
      <div>
        <h1 className="light-weight">About</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button text="Read More" className="view read" />
      </div>
    </div>
  );
}
