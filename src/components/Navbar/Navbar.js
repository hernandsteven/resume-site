import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./NavbarStyles.scss";
import resume from "../../resume/Steven H. Resume.pdf";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(76, 191, 166, 0.85);

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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <>
      <Wrapper id="nav__wrapper" style={{ top: visible ? "0" : "-75px" }}>
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
          <a href="#section__about" rel="noreferrer">
            <li>About</li>
          </a>

          <a href="#section__skills" rel="noreferrer">
            <li>Skills</li>
          </a>

          <a href="#section__projects" rel="noreferrer">
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
