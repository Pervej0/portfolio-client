import React from "react";
import { Col } from "react-bootstrap";
import { MyButton } from "../../StyledComponent/StyledComponent";

const ProjectItem = ({ project }) => {
  const {
    projectName,
    projectType,
    category,
    technologies,
    description,
    bannerImg,
  } = project;

  return (
    <Col xs={12} md={6}>
      <div className="border">
        <div className="item">
          <div className="img-box">
            <img className="img-fluid" src={bannerImg} alt="Projects images" />
          </div>
          <div className="content-box">
            <h3>{projectName}</h3>
          </div>
          <div className="details-btn">
            <MyButton backgroundColor="transparent">Details</MyButton>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectItem;
