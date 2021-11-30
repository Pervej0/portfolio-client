import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { MyButton } from "../../StyledComponent/StyledComponent";
import ProjectDetails from "./ProjectDetails";

const ProjectItem = ({ project }) => {
  const [lgShow, setLgShow] = useState(false);
  const { projectName, bannerImg } = project;

  return (
    <Col xs={12} md={6}>
      <ProjectDetails lgShow={lgShow} setLgShow={setLgShow} project={project} />
      <div style={{ border: "1px solid rgba(255,255,255,.1)" }}>
        <div className="item">
          <div className="img-box">
            <img className="img-fluid" src={bannerImg} alt="Projects images" />
          </div>
          <div className="content-box">
            <h3>{projectName}</h3>
          </div>
          <div className="details-btn">
            <MyButton
              backgroundColor="transparent"
              onClick={() => setLgShow(true)}
            >
              Details
            </MyButton>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectItem;
