import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import { MyButton } from "../../StyledComponent/StyledComponent";

const Blog = ({ blog }) => {
  const { name, title, img, description, like, comment } = blog;
  return (
    <Col xs={12} style={{ width: "100%" }}>
      <div className="mt-4 row" style={{ backgroundColor: "#2B2B2B" }}>
        <div className="px-0 col-12 col-md-4">
          <img
            className="img-fluid"
            src={img}
            style={{ height: "100%", objectFit: "cover" }}
            alt="blog images"
          />
        </div>
        <div className="col-12 col-md-8">
          <div className="py-3">
            <h5 className="text-light">{title}</h5>
            <div className="my-2 interaction">
              <small>posted by: {name} </small>
              <small className="mx-3">
                <FontAwesomeIcon icon={faThumbsUp} /> {like}{" "}
              </small>
              <small>
                <FontAwesomeIcon icon={faComment} /> {comment}
              </small>
            </div>
            <p className="text-light my-3 pb-4" style={{ fontSize: "15px" }}>
              {description.slice(0, 200)}
            </p>
            <MyButton backgroundColor="white">Read More</MyButton>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Blog;
