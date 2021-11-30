import React from "react";
import { Modal } from "react-bootstrap";

const ProjectDetails = ({ lgShow, setLgShow, project }) => {
  const {
    projectName,
    projectType,
    category,
    technologies,
    description,
    liveSite,
    clientCode,
    images,
    serverCode,
  } = project;

  const imageStyle = {
    height: "400px",
    width: "auto",
    textAlign: "center",
    overflowY: "scroll",
  };

  return (
    <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {projectName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center" style={imageStyle}>
          <img className="img-fluid" src={images[0]} alt="project-banner" />
        </div>
        <div className="my-3 py-3 project-details">
          <h6>
            <span className="fw-bold text-uppercase">Project type: </span>
            <span>{projectType}</span>
          </h6>
          <h6>
            <span className="fw-bold text-uppercase">Categories: </span>
            {category.map((item, index) => (
              <span key={index}>{item},&nbsp;</span>
            ))}
          </h6>
          <h6>
            <span className="fw-bold text-uppercase">Technologies: </span>
            {technologies.map((item, index) => (
              <span key={index}>{item},&nbsp;</span>
            ))}
          </h6>
          <ul className="py-3">
            {description.map((item, index) => (
              <li key={index}>{item},</li>
            ))}
          </ul>
          <div className="d-flex flex-wrap">
            <a
              className="px-4 m-1 py-2 bg-dark text-decoration-none text-light rounded-pill"
              href={liveSite}
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              className="px-4 m-1 mx-3 py-2 bg-dark text-decoration-none text-light rounded-pill"
              href={clientCode}
              target="_blank"
              rel="noreferrer"
            >
              Client Site Code
            </a>
            {serverCode && (
              <a
                className="px-4 m-1 mx-3 py-2 bg-dark text-decoration-none text-light rounded-pill"
                href={serverCode}
                target="_blank"
                rel="noreferrer"
              >
                Server Site Code
              </a>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectDetails;
