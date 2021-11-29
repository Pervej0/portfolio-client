import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  CustomContainer,
  MyButton,
  NameHeading,
} from "../StyledComponent/StyledComponent";
import Resume from "../../file/Md Pervej Hossain Web developer.pdf";
import Coder from "../../images/coder.png";
import SocialIcon from "../Layout/SocialIcon/SocialIcon";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <CustomContainer className="d-flex align-items-center">
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} md={6}>
            <h6 className="text-light">Hello, I'm </h6>
            <NameHeading>Md Pervej Hossain</NameHeading>
            <h5 className="text-light fw-bold mb-4">Web Developer</h5>
            <a href="#contact">
              <MyButton backgroundColor="white">Hire me</MyButton>
            </a>

            <a className="ms-md-3 ms-0 mb-4" href={Resume} download>
              <MyButton backgroundColor="transparent">Download Resume</MyButton>
            </a>

            <div className="mt-4">
              <SocialIcon />
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
