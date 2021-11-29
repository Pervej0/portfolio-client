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
          className="text-light"
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
              href="#link"
              className="text-white text-uppercase fw-bolder"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#link"
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
