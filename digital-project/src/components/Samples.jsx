import React from "react";
import sample1 from "../assets/project-page1.png";
import sample2 from "../assets/project-page2.png";
import sample3 from "../assets/project-page3.png";
import Button from "./Button";

const sampleProjects = [
  {
    src: sample1,
    heading: "Sample Project",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    src: sample2,
    heading: "Sample Project 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    src: sample3,
    heading: "Sample Project 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Samples = () => {
  return (
    <div>
      <h1 className="photo-gallery">
        <span className="light-weight">Our</span> Projects
      </h1>
      <div>
        {sampleProjects.map((project, index) => (
          <div key={index} className="flex sample-container">
            <img src={project.src} alt="Buildings" />
            <div className="flex-column">
              <h2 className="light-weight">{project.heading}</h2>
              <p>{project.text}</p>
              <Button text="View More" className="view read" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Samples;
