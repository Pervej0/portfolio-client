import styled from "styled-components";

export const CustomContainer = styled.section`
  background-color: #252525;
  min-height: 100vh;
  padding: 3rem 0;
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

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor === "transparent" ? "white" : "transparent"};
    color: ${(props) =>
      props.backgroundColor === "transparent" ? "#252525" : "white"};
  }
`;
