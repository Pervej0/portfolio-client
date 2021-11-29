import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconBox, IconList } from "../../StyledComponent/StyledComponent";

const SocialIcon = () => {
  return (
    <IconBox>
      <a
        href="https://www.facebook.com/pervej0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconList
          border="1px solid rgba(6, 118, 232,.5)"
          color="#0676e8"
          hoverBackground="#0676e8"
          hoverColor="#ffffff"
          title="facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </IconList>
      </a>
      <a
        href="https://github.com/Pervej0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconList
          border="1px solid rgba(255,255,255,.5)"
          color="#ffffff"
          hoverBackground="#ffffff"
          hoverColor="#0a66c2"
          title="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </IconList>
      </a>
      <a
        href="https://www.linkedin.com/in/md-pervej-hossain"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconList
          border="1px solid rgba(183, 43, 0,.5)"
          color="#ffffff"
          hoverBackground="#b72b00"
          hoverColor="#ffffff"
          title="github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconList>
      </a>
      <a
        href="https://twitter.com/Pervej0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconList
          border="1px solid rgba(0, 171, 238,.5)"
          color="#00acee"
          hoverBackground="#00acee"
          hoverColor="#ffffff"
          title="twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconList>
      </a>
    </IconBox>
  );
};

export default SocialIcon;
