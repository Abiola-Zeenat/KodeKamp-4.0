import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";

const galleryPhotos = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
];

const ГАЛЕРЕЯ = () => {
  return (
    <div>
      <h1 className="photo-gallery">
        <span className="light-weight">Photo</span> Gallery
      </h1>
      <div className="flex gallery">
        {galleryPhotos.map((photo, index) => (
          <img key={index} src={photo} alt="photo-gallery" />
        ))}
      </div>

      <div className="flex">
        <div className="hero-nums gallery-nums">
          <div className="zero">
            <p>0</p>
            <p>1</p>
          </div>
          <p>/</p>
          <p>05</p>
        </div>
        <span className="left-arrow"> ⬅</span>
        <span className="right-arrow">➡</span>
      </div>
    </div>
  );
};

export default ГАЛЕРЕЯ;
