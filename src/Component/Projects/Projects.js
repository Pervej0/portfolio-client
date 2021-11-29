import React from "react";
import { Row } from "react-bootstrap";
import { CustomContainer } from "../StyledComponent/StyledComponent";

const Projects = () => {
  return (
    <CustomContainer id="projects">
      <div className="text-light text-center mb-5">
        <h1 className="fw-bolder">My Projects</h1>
        <p className="">Sample list of projects accomplish so far</p>
      </div>
      <Row></Row>
    </CustomContainer>
  );
};

export default Projects;
