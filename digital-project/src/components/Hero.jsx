import hero from "../assets/hero.png";
import Button from "./Button";

function Hero() {
  return (
    <div className="hero wrap flex">
      <div>
        <h1>
          <span className="light-weight">PROJECT </span>Lorum
        </h1>
        <div className="flex-arrow">
          <div>
            <span className="left-arrow"> ⬅</span>
            <span className="right-arrow">➡</span>
          </div>
          <div className="hero-nums">
            <div className="zero">
              <p>0</p>
              <p>1</p>
            </div>
            <p>/</p>
            <p>02</p>
          </div>
        </div>
      </div>

      <div>
        <img src={hero} alt="white building" />
        <Button text="View Project" className="view" />
      </div>
    </div>
  );
}

export default Hero;
