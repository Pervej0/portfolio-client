import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import TopBar from "./Compo/TopBar";
import "./Header.css";

const Header = () => {
  const headerStyle = {
    border: 0,
    boxShadow: "0px 2px 6px 0px rgb(0 0 0 / 10%)",
    backgroundColor: "#252525",
    zIndex: "9",
  };
  return (
    <>
      <TopBar />
      <header
        style={headerStyle}
        className="position-sticky top-0 w-100 zindex-sticky"
      >
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand
              href="#home"
              className="text-light fw-bold"
              style={{ fontFamily: "Italianno, cursive", fontSize: 45 }}
            >
              Pervej
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-light"
            />
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
                  href="#blog"
                  className="text-white text-uppercase fw-bolder"
                >
                  Blog
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
      </header>
    </>
  );
};

export default Header;
