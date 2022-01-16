import React from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-animated-slider";
import { ScrollSlider } from "../../StyledComponent/StyledComponent";

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
        <div style={{ overflowY: "scroll" }}>
          <Slider>
            {images.map((item, index) => (
              <ScrollSlider key={index}>
                <img
                  className="img-fluid"
                  src={item}
                  alt="project-banner"
                  style={{ width: "400px", objectFit: "cover" }}
                />
              </ScrollSlider>
            ))}
          </Slider>
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
