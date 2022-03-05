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
  width: 4em;
  bottom: 0;
  margin-left: 1.5em;
  border-radius: 10px 10px 0 0;
  background-color: rgba(255, 255, 255, 0.5);
  outline: 2px solid rgb(72, 38, 115, 0.8);
  padding-top: 1.2em;
  padding-bottom: 0.5em;

  a {
    text-decoration: none;
    transition: 0.4s;

    &:link {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
    transition: all 0.3s ease-in-out;
    &:hover {
      filter: brightness(1.9);
      transform: scale(1.2);
    }
  }
`;

const GithubIcon = styled(Github)`
  height: 4em;
  width: 3em;
  color: rgb(72, 38, 115, 1);
`;

const LinkedinIcon = styled(Linkedin)`
  height: 4em;
  width: 3em;

  color: rgb(72, 38, 115, 1);
`;

const EmailOutlineIcon = styled(Mail)`
  height: 4em;
  width: 3em;

  color: rgb(72, 38, 115, 1);
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
        </SideMenu>
      </Wrapper>
    </>
  );
};

export default Aside;
