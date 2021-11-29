import styled from "styled-components";

export const CustomContainer = styled.section`
  background-color: #252525;
  min-height: 100vh;
  padding: 3rem 0;
`;

export const NameHeading = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  color: #ffffff;
  @media (max-width: 767px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.3rem;
  }
`;

export const MyButton = styled.button`
  padding: 10px 35px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) =>
    props.backgroundColor === "transparent" ? "white" : "#252525"};
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.4s all ease;
  border: 2px solid #ffffff;
  border-radius: 50px;
  margin-bottom: 15px;

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor === "transparent" ? "white" : "transparent"};
    color: ${(props) =>
      props.backgroundColor === "transparent" ? "#252525" : "white"};
  }
`;

export const IconBox = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  list-style-type: none;
`;

export const IconList = styled.li`
  position: absolute;
  padding: 12px 17px;
  color: ${(props) => props.color};
  position: relative;
  margin: 0px 5px;
  border-radius: 50px;
  cursor: pointer;
  border: ${(props) => props.border};
  transition: 0.4s all ease;

  &:hover {
    color: ${(props) => props.hoverColor};
    background: ${(props) => props.hoverBackground};
    transform: scale(1.2);
  }
`;
