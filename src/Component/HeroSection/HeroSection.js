import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CustomContainer, MyButton } from "../StyledComponent/StyledComponent";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Resume from "../../file/Md Pervej Hossain Web developer.pdf";

const HeroSection = () => {
  return (
    <CustomContainer className="d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h6 className="text-light">Hello, I'm </h6>
            <h1
              className="text-light"
              style={{ fontSize: "3.5rem", fontWeight: 700 }}
            >
              Md Pervej Hossain
            </h1>
            <h5 className="text-light fw-bold mb-3">Web Developer</h5>
            <MyButton backgroundColor="white">Hire me</MyButton>

            <a className="ms-3" href={Resume} download>
              <MyButton backgroundColor="transparent">Download Resume</MyButton>
            </a>

            <div className="mt-3">
              <ul className="text-light style-type-none">
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            2
          </Col>
        </Row>
      </Container>
    </CustomContainer>
  );
};

export default HeroSection;
