import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomContainer } from "../../StyledComponent/StyledComponent";

const AboutMeDetails = () => {
  return (
    <CustomContainer>
      <Container>
        <div>
          <div className="d-flex justify-content-end align-items-center mb-5">
            <Link to="/" className="px-5 bg-light d-inline text-dark">
              <div title="Go Home">
                <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
              </div>
            </Link>
          </div>
          <div>
            <h4 className="fw-bold mb-4" style={{ color: "#f7f7f7" }}>
              About me
            </h4>
            <p className="text-light">
              my name is md pervej Hossain, consectetur adipiscing elit. Etiam
              suscipit mi eget dui venenatis posuere. In varius nulla non
              elementum hendrerit. Suspendisse varius sapien odio, in gravida
              ipsum luctus id. Ut nisl erat, dignissim sed volutpat at,
              hendrerit imperdiet purus. Maecenas fringilla, augue sed vulputate
              ullamcorper, risus lorem facilisis massa, a varius nunc tellus sed
              odio.
              <br />
              <br />
              Suspendisse fermentum lobortis elit sit amet vehicula. Etiam in
              dolor vitae leo euismod consequat a vitae ligula.Nunc viverra enim
              purus, vel luctus ante tempus vel. Vivamus et metus massa.
              Pellentesque at nulla velit. Morbi pellentesque egestas massa in
              scelerisque. Vivamus pharetra dolor enim, vel vulputate erat
              euismod sit amet.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="fw-bold mb-4" style={{ color: "#f7f7f7" }}>
              Education
            </h4>
            <div style={{ color: "#f7f7f7" }}>
              <h6>
                <span className="fw-bold">Institute:</span>&nbsp; National
                Professional Institute (NPI)
              </h6>
              <h6>
                <span className="fw-bold">Degree:</span>&nbsp; Diploma
                Engineering
              </h6>
              <h6>
                <span className="fw-bold">Department:</span>&nbsp;Mechanical
                Technology
              </h6>
              <h6>
                <span className="fw-bold"> Course Duration:</span>&nbsp; 4 year
                or 8 semester
              </h6>
              <h6>
                <span className="fw-bold"> Current Status:</span>&nbsp; 3
                <sup>rd</sup> year 6th Semester
              </h6>
            </div>
          </div>
        </div>
      </Container>
    </CustomContainer>
  );
};

export default AboutMeDetails;
