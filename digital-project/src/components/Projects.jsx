import Button from "./Button";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const Projects = () => {
  return (
    <div className="project-container">
      <h1 className="light-weight">Our Projects</h1>
      <div>
        <div className="flex sample-top">
          <div className="sample">
            <div className="overlay">
              <div className="sample-text">
                <h1>Sample Project </h1>
                <Button text="View more" className="project-view" />
              </div>
            </div>
          </div>
          <img src={project1} alt="projects" />
        </div>
        <div className="flex sample-down">
          <img src={project2} alt="projects" className="quarter" />
          <img src={project3} alt="projects" className="half" />
          <img src={project4} alt="projects" className="quarter" />
        </div>
      </div>
      <Button className="all-project" text="ALL PROJECTS" />
    </div>
  );
};

export default Projects;
