import React from "react";
import styled from "styled-components";
import "./NavbarStyles.scss";
import resume from "../../resume/Steven H. Resume.pdf";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(76, 191, 166, 1);

  width: 100%;
  height: 75px;
  padding: 10px;
`;

const Logo = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: center;
  color: rgb(72, 38, 115, 1);
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  margin-left: 0px;
  border-radius: 10px;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: row;

  a {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    margin: 5px;
    padding: 10px;
    background-color: #4cbfa6;
    border-radius: 1px;

    text-decoration: none;
    transition: 0.4s;

    &:link {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }

    :hover {
      filter: brightness(1.1);
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Wrapper id="nav__wrapper">
        <a
          href="#section__jumbotron"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Logo id="nav__logo">
            <h1>sh.</h1>
          </Logo>
        </a>
        <NavMenu>
          <a href="#section__about" target="_blank" rel="noreferrer">
            <li>About</li>
          </a>

          <a href="#section__skills" target="" rel="noreferrer">
            <li>Skills</li>
          </a>

          <a href="https://google.com" target="_blank" rel="noreferrer">
            <li>Projects</li>
          </a>

          <a
            id="nav__item__resume"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            <li>Resume</li>
          </a>
        </NavMenu>
      </Wrapper>
    </>
  );
};

export default Navbar;
