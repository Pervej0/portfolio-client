import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CustomContainer, MyButton } from "../StyledComponent/StyledComponent";
import Boy from "../../images/boy.png";
import Resume from "../../file/Md Pervej Hossain Web developer.pdf";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <CustomContainer id="about">
      <Container>
        <div className="text-light text-center mb-5">
          <h1 className="fw-bolder">About Me</h1>
        </div>
        <Row className="pt-5 g-5">
          <Col xs={12} md={6}>
            <img className="img-fluid" src={Boy} alt="" />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="text-light" style={{ fontWeight: 600 }}>
              Md Pervej Hossain
            </h1>
            <h4 className="text-light">Web developer</h4>
            <p className="text-light pb-2 mt-2">
              <span className="d-block mb-2">Hello everyone,</span> my name is
              md pervej Hossain, I am currenty studying in Diploma Engineering
              in Mechanical Technology. Now I am in 6th semesetr of my study.
              But at the time of my study I feel myself more comfortable in
              computer programming. So I start querying and reach few bootcamp
              course door. I completed my Responsive Web Design (RWD) course
              from "Cooder Trust Bangladesh". <br />
              <br /> Then to get more confident I choose to walk in specific
              stack and that is MERN stack. So I set myself in online bootcamp
              course in "Programming-hero" and completed it with the great
              reaward. Now, I believe that am in convenient position to
              co-operate with a company.
            </p>
            <Link to="aboutMe">
              <MyButton backgroundColor="transparent">Read More</MyButton>
            </Link>
            <a className="ms-lg-3 ms-sm-3 ms-0  my-4" href={Resume} download>
              <MyButton backgroundColor="white">Download Resume</MyButton>
            </a>
          </Col>
        </Row>
      </Container>
    </CustomContainer>
  );
};

export default AboutMe;
