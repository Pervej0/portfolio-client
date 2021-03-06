import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { CustomContainer } from "../StyledComponent/StyledComponent";
import ProjectItem from "./Compo/ProjectItem";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <CustomContainer id="projects" className="projects my-3">
      <Container>
        <div className="text-light text-center mb-5">
          <h1 className="fw-bolder">My Projects</h1>
          <p>Sample list of projects accomplish so far</p>
        </div>
        <Row className="g-4 mt-5">
          {projects.map((item) => (
            <ProjectItem project={item} key={item.projectName} />
          ))}
        </Row>
      </Container>
    </CustomContainer>
  );
};

export default Projects;
