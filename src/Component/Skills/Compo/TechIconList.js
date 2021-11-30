import {
  faBootstrap,
  faCss3Alt,
  faGit,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TechIcon } from "../../StyledComponent/StyledComponent";

const TechIconList = () => {
  return (
    <div className="mt-5 techIconList">
      <div className="d-flex flex-wrap justify-content-center">
        <TechIcon backgroundColor="#E8D519" color="#000100" title="JavaScript">
          <FontAwesomeIcon icon={faJsSquare} size="3x" />
        </TechIcon>
        <TechIcon backgroundColor="#202020" color="#07D4F9" title="React">
          <FontAwesomeIcon icon={faReact} size="3x" />
        </TechIcon>
        <TechIcon backgroundColor="#F2F2F2" color="#68A063" title="Node.js">
          <FontAwesomeIcon icon={faNode} size="3x" />
        </TechIcon>
        <TechIcon backgroundColor="#d5d5d5" color="#E86228" title="Html5">
          <FontAwesomeIcon icon={faHtml5} size="3x" />
        </TechIcon>
        <TechIcon backgroundColor="#006CB2" color="#d5d5d5" title="CSS3">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" />
        </TechIcon>
        <TechIcon backgroundColor="#533B78" color="#d5d5d5" title="Bootstarp">
          <FontAwesomeIcon icon={faBootstrap} size="3x" />
        </TechIcon>
        <TechIcon backgroundColor="#3d3d3d" color="#d5d5d5" title="Git tool">
          <FontAwesomeIcon icon={faGit} size="3x" />
        </TechIcon>
        <TechIcon backgroundColor="#BBD2F5" color="#d5d5d5" title="Firebase">
          <img
            src="https://img.icons8.com/color/48/000000/firebase.png"
            alt="firebase icon"
          />
        </TechIcon>
        <TechIcon backgroundColor="#d5d5d5" color="#d5d5d5" title="Tailwind">
          <svg
            className="w-10 h-10 block md:hidden"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Tailwind CSS</title>
            <path
              fill="#14B4C6"
              d="M32 16.3c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C35.744 29.39 38.808 32.5 45.5 32.5c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C41.756 19.41 38.692 16.3 32 16.3zM18.5 32.5c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C22.244 45.59 25.308 48.7 32 48.7c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C28.256 35.61 25.192 32.5 18.5 32.5z"
            ></path>
          </svg>
        </TechIcon>
        <TechIcon backgroundColor="#d5d5d5" color="#d5d5d5" title="vs code">
          <img
            src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
            alt="vs code-icon"
          />
        </TechIcon>
      </div>
    </div>
  );
};

export default TechIconList;
