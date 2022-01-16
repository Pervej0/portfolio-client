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

export const SkillsItem = styled.div`
  padding: 30px;
  -webkit-clip-path: polygon(
    25% 5%,
    75% 5%,
    100% 50%,
    75% 95%,
    25% 95%,
    0% 50%
  );
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  background: #ffffff;
  display: inline-flex;
  align-items: center;
`;

export const TechIcon = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  height: 100px;
  width: 100px;
  object-fit: cover;
  margin: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const SkillsBox = styled.div`
  & {
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: 0.3s all ease in;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    transform: translet(-50%, -50%);
    background: transparent;
    height: 0;
    width: 0;
    text-align: center;
    -webkit-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -ms-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease-out;
  }
  &:hover:after {
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    transform: scale(1.2);
  }
`;

// scoling projects slider

export const ScrollSlider = styled.div`
  height: 400px;
  width: 100%;
  box-sizing: content-box;
  text-align: center;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
