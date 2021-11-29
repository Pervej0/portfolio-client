import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MyLocation = () => {
  return (
    <>
      <div className="d-flex text-light align-items-center mb-3">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div
          className="ms-4 w-100"
          style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}
        >
          <h5 className="mb-3">Location</h5>
          <p style={{ fontSize: "14px" }}>
            Cha-95/2, North Badda, Dhaka Bangladesh
          </p>
        </div>
      </div>
      <div className="d-flex text-light align-items-center mb-3">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <div
          className="ms-4 w-100"
          style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}
        >
          <h5 className="mb-3">Phone</h5>
          <p style={{ fontSize: "14px" }}>+88 01685445764</p>
        </div>
      </div>
      <div className="d-flex text-light align-items-center mb-3">
        <FontAwesomeIcon icon={faEnvelope} />
        <div
          className="ms-4 w-100"
          style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}
        >
          <h5 className="mb-3">Email</h5>
          <p style={{ fontSize: "14px" }}>mdpervejhossain0@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default MyLocation;
