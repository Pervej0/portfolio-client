import "./Blogs.css";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CustomContainer, MyButton } from "../StyledComponent/StyledComponent";
import Blog from "./Compo/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [latests, setLatests] = useState();

  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLatests(data[2]);
      });
  }, []);

  return (
    <CustomContainer className="blogs" id="blog">
      <Container>
        <div className="text-light text-center mb-5 py-4">
          <h1 className="fw-bolder">Demo Blogs</h1>
          <p>This is sample of blogs UI real mine will come soon.</p>
        </div>
        <Row className="pt-5 align-items-baseline gy-4">
          <Col xs={12} lg={8}>
            {blogs.slice(0, 2).map((item) => (
              <Blog key={item.title} blog={item} />
            ))}
          </Col>
          <Col xs={6} lg={4}>
            <div style={{ backgroundColor: "#2B2B2B", height: "100%" }}>
              <div>
                <img
                  className="img-fluid"
                  src={latests?.img}
                  style={{ height: "100%", objectFit: "cover" }}
                  alt="blog images"
                />
              </div>
              <div className="ms-1 px-2" style={{}}>
                <h5 className="text-light mt-3">{latests?.title}</h5>
                <div className="interaction text-light my-2">
                  <small>posted by: {latests?.name} </small>
                  <small className="mx-3">
                    <FontAwesomeIcon icon={faThumbsUp} /> {latests?.like}
                  </small>
                  <small>
                    <FontAwesomeIcon icon={faComment} /> {latests?.comment}
                  </small>
                </div>
                <p className="text-light my-3" style={{ fontSize: "15px" }}>
                  {latests?.description.slice(0, 200)}
                </p>
                <MyButton backgroundColor="white">Read More</MyButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </CustomContainer>
  );
};

export default Blogs;
