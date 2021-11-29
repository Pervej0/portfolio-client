import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { CustomContainer, MyButton } from "../StyledComponent/StyledComponent";
import emailjs from "emailjs-com";
import ToastAlert from "./Compo/ToastAlert";
import MyLocation from "./Compo/MyLocation";

const Contact = () => {
  const [details, setDetails] = useState();
  const [show, setShow] = useState(false);

  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newDetails = { ...details, [name]: value };
    setDetails(newDetails);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_678l4q7",
        "template_fwqi5vc",
        e.target,
        "user_GWtl3TdOBbsVHiXl4Gxd3"
      )
      .then((res) => {
        if (res.status === 200) {
          setShow(true);
          e.target.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <CustomContainer id="contact">
      <Container>
        <div className="text-light text-center mb-5">
          <small className="text-uppercase">Contact</small>
          <h1 className="fw-bolder">Get in Touch</h1>
          <p className="">
            You are welcome to knock me at any time. I will reach you ASAP.
          </p>
        </div>
        <Row className="pt-5 g-5">
          <Col xs={12} md={6}>
            <ToastAlert show={show} setShow={setShow} />
            <Form onSubmit={submitHandle}>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Name.."
                className="mb-3 text-light"
              >
                <Form.Control
                  className="bg-transparent text-light shadow-none"
                  type="text"
                  style={{ border: "1px solid rgba(255,255,255,.1)" }}
                  placeholder="Name"
                  name="name"
                  required
                  onBlur={handleBlur}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Email.."
                className="mb-3 text-light"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="bg-transparent text-light shadow-none"
                  style={{ border: "1px solid rgba(255,255,255,.1)" }}
                  name="user-email"
                  required
                  onBlur={handleBlur}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Message"
                className="mb-t text-light"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{
                    height: "150px",
                    border: "1px solid rgba(255,255,255,.1)",
                  }}
                  className="bg-transparent text-light shadow-none"
                  name="message"
                  onBlur={handleBlur}
                />
              </FloatingLabel>
              <MyButton
                type="submit"
                backgroundColor="transparent"
                className="mt-3"
              >
                Send Message
              </MyButton>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            <MyLocation />
          </Col>
        </Row>
      </Container>
    </CustomContainer>
  );
};

export default Contact;
