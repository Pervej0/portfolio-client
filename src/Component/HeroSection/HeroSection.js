import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CustomContainer, MyButton } from "../StyledComponent/StyledComponent";

const HeroSection = () => {
  return (
    <CustomContainer className="d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h6 className="text-light">Hello, I'm</h6>
            <h1
              className="text-light"
              style={{ fontSize: "3.5rem", fontWeight: 700 }}
            >
              Md Pervej Hossain
            </h1>
            <h5 className="text-light fw-bold mb-3">Web Developer</h5>
            <MyButton backgroundColor="white">Hire me</MyButton>
            <MyButton backgroundColor="transparent" className="ms-4">
              Download Cv
            </MyButton>
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
