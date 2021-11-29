import React from "react";
import { Toast } from "react-bootstrap";

const ToastAlert = ({ show, setShow }) => {
  return (
    <Toast
      className="position-fixed top-0 mt-5"
      onClose={() => setShow(false)}
      show={show}
      delay={5000}
      autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      </Toast.Header>
      <Toast.Body className="text-success bg-light">
        Thank you, recieved your email!
      </Toast.Body>
    </Toast>
  );
};

export default ToastAlert;
