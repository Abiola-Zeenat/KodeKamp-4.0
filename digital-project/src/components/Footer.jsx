import logo from "../assets/logowhite.png";

const Footer = () => {
  return (
    <div className="flex footer">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <h5>Information</h5>
        <p>Main</p>
        <p>Gallery</p>
        <p>Projects</p>
        <p>Certifications</p>
        <p>Contacts</p>
      </div>
      <div>
        <h5>Contacts</h5>
        <p>
          <i class="fa fa-map-marker" aria-hidden="true"></i>1234 Sample Street
          Austin Texas 78704
        </p>
        <p>
          <i class="fa fa-phone" aria-hidden="true"></i>512.333.2222
        </p>
        <p>
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          sampleemail@gmail.com
        </p>
      </div>
      <div>
        <h5>social media</h5>
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Footer;
