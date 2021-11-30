import {
  faAngleDoubleRight,
  faGraduationCap,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  CustomContainer,
  SkillsBox,
  SkillsItem,
} from "../StyledComponent/StyledComponent";
import TechIconList from "./Compo/TechIconList";
import "./Skills.css";

const Skills = () => {
  return (
    <CustomContainer>
      <Container>
        <div className="text-light text-center mb-5">
          <h1 className="fw-bolder">My Skills</h1>
          <p>The technology which I used in my projects</p>
        </div>
        <Row className="g-4 mt-4">
          <Col xs={12} md={4}>
            <SkillsBox className="p-3">
              <SkillsItem>
                <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
              </SkillsItem>
              <div>
                <p className="text-light mt-3">
                  Developing blazing fast web application for seamless user
                  interaction
                </p>
              </div>
            </SkillsBox>
          </Col>
          <Col xs={12} md={4}>
            <SkillsBox className="p-3">
              <SkillsItem>
                <FontAwesomeIcon icon={faMobileAlt} size="2x" />
              </SkillsItem>
              <div>
                <p className="text-light mt-3">
                  Mobile fast responsive design SharedLayout for all devices is
                  a top priority
                </p>
              </div>
            </SkillsBox>
          </Col>
          <Col xs={12} md={4}>
            <SkillsBox className="p-3">
              <SkillsItem>
                <FontAwesomeIcon icon={faGraduationCap} size="2x" />
              </SkillsItem>
              <div>
                <p className="text-light mt-3">
                  Constantly continues to learn new technologies and implement
                  it
                </p>
              </div>
            </SkillsBox>
          </Col>
        </Row>
        <TechIconList />
      </Container>
    </CustomContainer>
  );
};

export default Skills;
