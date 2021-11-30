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
              md pervej Hossain, consectetur adipiscing elit. Etiam suscipit mi
              eget dui venenatis posuere. In varius nulla non elementum
              hendrerit. Suspendisse varius sapien odio, in gravida ipsum luctus
              id. Ut nisl erat, dignissim sed volutpat at, hendrerit imperdiet
              purus. Maecenas fringilla, augue sed vulputate ullamcorper, risus
              lorem facilisis massa, a varius nunc tellus sed odio.
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
