import React from "react";
import styled from "styled-components";
import { Search } from "@styled-icons/fluentui-system-filled/Search";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { device } from "../util/media-queries";

const Wrapper = styled.div`
  /* margin-left -350px to hide sidebar */
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);

  /* collapsing navbar */
  @media ${device.mobileS} {
    margin-left: -350px;
  }
  @media ${device.mobileM} {
    margin-left: -350px;
  }
  @media ${device.mobileL} {
    margin-left: -350px;
  }
  @media ${device.tablet} {
    margin-left: -350px;
  }

  @media ${device.laptop} {
    margin-left: 0px;
    display: inline-block;
  }

  @media ${device.desktop} {
    margin-left: 0px;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
`;

const SearchIcon = styled(Search)`
  height: 40px;
  transform: scale(-1, 1);
  color: rgba(210, 215, 217, 0.75);
  background-color: white;

  border-top-left-radius: 0.375em;
  border-bottom-left-radius: 0.375em;

  border-top: solid 2px rgba(210, 215, 217, 0.75);
  border-bottom: solid 2px rgba(210, 215, 217, 0.75);
  border-left: solid 2px rgba(210, 215, 217, 0.75);

  &:hover {
    color: #55bdca;
  }

  @media ${device.desktop} {
    min-height: 45px;
  }
`;

const SearchBar = styled.input`
  height: 40px;
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  padding: 1em;

  border-top-left-radius: 0.375em;
  border-bottom-left-radius: 0.375em;

  border: solid 2px rgba(210, 215, 217, 0.75);

  outline: none;

  &:hover {
    border-color: #55bdca;
  }

  @media ${device.desktop} {
    min-height: 45px;
  }
`;
const MenuWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`;
const MenuHeader = styled.h2`
  display: flex;
  align-items: flex-start;
  user-select: none;
  text-underline-position: under;
  text-decoration: underline solid #55bdca;
`;

const MenuItem = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;

  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;

  cursor: pointer;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  &:hover {
    a {
      text-underline-position: under;
      text-decoration: underline dotted #55bdca;
    }
  }

  a {
    text-decoration: none;
    &:link {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
  }

  &:hover {
    color: #55bdca;
  }
`;

const EmailIcon = styled(EmailOutline)`
  color: #55bdca;
  height: 30px;
  margin-right: 0.5rem;
`;

const LinkedinIcon = styled(Linkedin)`
  color: #55bdca;
  height: 30px;
  margin-right: 0.5rem;
`;

const GithubIcon = styled(GithubOutline)`
  color: #55bdca;
  height: 30px;
  margin-right: 0.5rem;
`;

const Footer = styled.div`
  padding: 5px;
  position: absolute;
  bottom: 0;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar placeholder="Search" />
        <SearchIcon />
      </SearchBarWrapper>
      <MenuWrapper>
        <MenuHeader>Menu</MenuHeader>
        <MenuItem>
          <a href="#skills">Skills</a>
        </MenuItem>
        <MenuItem>Experience</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>
          <a
            href="https://drive.google.com/file/d/1NktifWqstMuKFNs4dgyBNhsHenqcs4QC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume & CV
          </a>
        </MenuItem>
      </MenuWrapper>
      <MenuWrapper>
        <MenuHeader>Contact Me</MenuHeader>
        <MenuItem>
          <EmailIcon />
          <a href="mailto:hernandsteven@gmail.com">hernandsteven@gmail.com</a>
        </MenuItem>
        <MenuItem>
          <LinkedinIcon />
          <a
            href="https://www.linkedin.com/in/hernandsteven99/"
            target="_blank"
            rel="noreferrer"
          >
            hernandsteven99
          </a>
        </MenuItem>
        <MenuItem>
          <GithubIcon />
          <a
            href="https:github.com/hernandsteven/"
            target="_blank"
            rel="noreferrer"
          >
            hernandsteven
          </a>
        </MenuItem>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Sidebar;
