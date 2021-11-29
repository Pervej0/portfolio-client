import React from "react";
import { Container } from "react-bootstrap";
import SocialIcon from "../Layout/SocialIcon/SocialIcon";

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{
        backgroundColor: "#252525",
        borderTop: "1px solid rgba(255,255,255,.2)",
      }}
    >
      <Container>
        <div className="d-flex justify-content-sm-between justify-content-center flex-wrap">
          <h5 className="text-light mb-4">Copyright © All rights reserved.</h5>
          <SocialIcon />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
