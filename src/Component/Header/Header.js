import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const headerStyle = {
    border: 0,
    borderBottom: "1px solid rgba(255,255,255,.1)",
    boxShadow: "0px 2px 6px 0px rgb(0 0 0 / 10%)",
    backgroundColor: "#252525",
  };
  return (
    <Navbar expand="lg" style={headerStyle}>
      <Container>
        <Navbar.Brand
          href="#home"
          className="text-light fw-bold"
          style={{ fontFamily: "Italianno, cursive", fontSize: 45 }}
        >
          Pervej
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className="text-white text-uppercase fw-bolder"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="text-white text-uppercase fw-bolder"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="text-white text-uppercase fw-bolder"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="text-white text-uppercase fw-bolder"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
