import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="main-nav">
      <Link
        value="projects"
        onMouseOver={props.handleChange}
        onMouseOut={props.clearDescription}
        to="/projects"
      >
        <div
          className="selection"
          onMouseOver={props.handleChange}
          onMouseOut={props.clearDescription}
          value="projects"
        >
          PROJECTS
        </div>
      </Link>
      <a
        href="https://docs.google.com/document/d/1z0NZ6Xm6dchSZrozSh9r75f6x8eK26pS7gdnN1fgMqc/edit?usp=sharing"
        target="_blank"
        value="resume"
        onMouseOver={props.handleChange}
        onMouseOut={props.clearDescription}
      >
        <div
          className="selection"
          onMouseOver={props.handleChange}
          onMouseOut={props.clearDescription}
          value="about"
        >
          RESUME
        </div>
      </a>
      <Link
        value="twitch"
        onMouseOver={props.handleChange}
        onMouseOut={props.clearDescription}
        to="/twitch"
      >
        <div
          className="selection"
          onMouseOver={props.handleChange}
          onMouseOut={props.clearDescription}
          value="twitch"
        >
          TWITCH
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
