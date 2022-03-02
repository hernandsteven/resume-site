import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/feather/Github";
import { Linkedin } from "@styled-icons/feather/Linkedin";
import { Mail } from "@styled-icons/feather/Mail";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SideMenu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin-left: 1.5em;

  a {
    text-decoration: none;
    transition: 0.4s;
    &:link {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }

    &:hover {
      color: rgb(72, 38, 115, 1);
    }
  }
`;

const Line = styled.div`
  height: 70px;
  width: 2px;
  background-color: white;
  border-radius: 360px;
  margin-top: 10px;
`;

const GithubIcon = styled(Github)`
  height: 35px;
  width: 35px;
  margin-top: 10px;
`;

const LinkedinIcon = styled(Linkedin)`
  height: 35px;
  width: 35px;
  margin-top: 10px;
`;

const EmailOutlineIcon = styled(Mail)`
  height: 35px;
  width: 35px;
  margin-top: 10px;
`;

const Aside = () => {
  return (
    <>
      <Wrapper>
        <SideMenu>
          <a
            href="https://github.com/hernandsteven"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/hernandsteven99/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a href="mailto:hernandsteven@gmail.com">
            <EmailOutlineIcon />
          </a>
          <Line />
        </SideMenu>
      </Wrapper>
    </>
  );
};

export default Aside;
