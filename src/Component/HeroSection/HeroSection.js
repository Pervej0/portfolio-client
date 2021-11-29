import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  CustomContainer,
  MyButton,
  IconList,
  IconBox,
  NameHeading,
} from "../StyledComponent/StyledComponent";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Resume from "../../file/Md Pervej Hossain Web developer.pdf";
import Coder from "../../images/coder.png";

const HeroSection = () => {
  return (
    <CustomContainer className="d-flex align-items-center">
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} md={6}>
            <h6 className="text-light">Hello, I'm </h6>
            <NameHeading>Md Pervej Hossain</NameHeading>
            <h5 className="text-light fw-bold mb-4">Web Developer</h5>
            <MyButton backgroundColor="white">Hire me</MyButton>

            <a className="ms-md-3 ms-0 mb-4" href={Resume} download>
              <MyButton backgroundColor="transparent">Download Resume</MyButton>
            </a>

            <div className="mt-4">
              <IconBox>
                <a
                  href="https://www.facebook.com/pervej0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconList
                    border="1px solid rgba(6, 118, 232,.5)"
                    color="#0676e8"
                    hoverBackground="#0676e8"
                    hoverColor="#ffffff"
                    title="facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </IconList>
                </a>
                <a
                  href="https://github.com/Pervej0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconList
                    border="1px solid rgba(255,255,255,.5)"
                    color="#ffffff"
                    hoverBackground="#ffffff"
                    hoverColor="#0a66c2"
                    title="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </IconList>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-pervej-hossain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconList
                    border="1px solid rgba(183, 43, 0,.5)"
                    color="#ffffff"
                    hoverBackground="#b72b00"
                    hoverColor="#ffffff"
                    title="github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </IconList>
                </a>
                <a
                  href="https://twitter.com/Pervej0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconList
                    border="1px solid rgba(0, 171, 238,.5)"
                    color="#00acee"
                    hoverBackground="#00acee"
                    hoverColor="#ffffff"
                    title="twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </IconList>
                </a>
              </IconBox>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img className="img-fluid" src={Coder} alt="developer-vector" />
          </Col>
        </Row>
      </Container>
    </CustomContainer>
  );
};

export default HeroSection;
