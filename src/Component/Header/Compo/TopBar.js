import {
  faEnvelope,
  faPhoneAlt,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";

const TopBar = () => {
  return (
    <section style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}>
      <Container>
        <div className="d-flex flex-wrap justify-content-md-between justify-content-center py-2">
          <div>
            <small
              className="text-uppercase text-light"
              style={{ fontWeight: "italic" }}
            >
              Welcome to have you in here
            </small>
            &nbsp;
            <FontAwesomeIcon icon={faSmileBeam} className="text-warning" />
          </div>
          <div className="text-light">
            <small className="text-light mx-3">
              <FontAwesomeIcon icon={faPhoneAlt} />
              &nbsp; +88 01685445764
            </small>
            |
            <small className="text-light mx-3">
              <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
              mdpervejhossain0@gmail.com
            </small>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopBar;
