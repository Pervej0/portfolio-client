import React from "react";
import { Modal } from "react-bootstrap";

const ProjectDetails = ({ lgShow, setLgShow, project }) => {
  const {
    projectName,
    projectType,
    category,
    technologies,
    description,
    bannerImg,
    liveSite,
    clientCode,
    serverCode,
  } = project;
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
        <div>
          <img className="img-fluid" src={bannerImg} alt="project-banner" />
        </div>
        <div className="my-3">
          <h4>
            <span className="fw-bold">Project type: </span>
            <span className="fs-5">{projectType}</span>
          </h4>
          <h3>
            <span className="fw-bold">Categories: </span>
            {category.map((item, index) => (
              <span className="fs-5" key={index}>
                {item},{" "}
              </span>
            ))}
          </h3>
          <h3>
            <span className="fw-bold">Technologies: </span>
            {technologies.map((item, index) => (
              <span className="fs-5" key={index}>
                {item},
              </span>
            ))}
          </h3>
          <ul>
            {description.map((item, index) => (
              <li className="fs-5" key={index}>
                {item},
              </li>
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
