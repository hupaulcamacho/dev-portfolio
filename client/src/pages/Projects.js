import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";

import rose from "../Assets/rose_char_select.png";
import fgcsocialicon from "../Assets/fgcsocialicon.png";

import ryu from "../Assets/ryu_char_select.png";
import handmedown from "../Assets/handmedown.png";
import handmedownV from "../Assets/handmedown720.mov";

import "../CSS/Projects.css";

const projects = {
  "FGC Social": {
    title: "FGC Social",
    character: rose,
    description: "A social media to unite the fgc on one platform.",
    imgUrl: fgcsocialicon,
    videoURL: handmedownV,
    repo: "https://github.com/hupaulcamacho/fgc-social",
    live: "https://fgc-social.web.app/",
  },
  "Hand Me Down": {
    title: "Hand Me Down",
    character: ryu,
    description:
      "A social media engagement project to promote sustainablity in the fashion industry. Utilizes QR codes to allow users to save stories of their memories made while wearing a piece of clothing, before handing that clothing down to someone else or donating it. ",
    imgUrl: handmedown,
    videoURL: handmedownV,
    repo: "https://github.com/hupaulcamacho/HandMeDown",
    live: "https://handmedown.herokuapp.com/",
  },
};

function Projects() {
  const [project, setProject] = useState(projects["FGC Social"]);

  const handleMouseOver = (e) => {
    e.preventDefault();
    const imageName = e.target.dataset.name;

    setProject(projects[imageName]);
  };

  const renderImg = () => {
    return (
      <img
        key={project.character}
        className="char-portrait"
        src={project.character}
      />
    );
  };

  return (
    <div className="project-main">
      <h1 className="projects-select">{project.title}</h1>
      <h1 className="project-title">Select a Project</h1>
      {renderImg()}
      <div className="project-container">
        <img
          onMouseOver={handleMouseOver}
          className="character"
          src={projects["FGC Social"].imgUrl}
          data-name={projects["FGC Social"].title}
        />
        <img
          onMouseOver={handleMouseOver}
          className="character"
          src={projects["Hand Me Down"].imgUrl}
          data-name={projects["Hand Me Down"].title}
        />
      </div>
      <div className="back-home-projects">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
export default Projects;
