import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./NavbarStyles.scss";
import resume from "../../resume/Steven H. Resume.pdf";
import { setTimeout } from "timers";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(76, 191, 166, 0.85);
`;

const Logo = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  font-size: 0.5rem;
  justify-content: center;
  color: rgb(72, 38, 115, 1);
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 0px;
  user-select: none;
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
    background-color: rgba(76, 191, 166, 0.5);
    border-radius: 1px;

    text-decoration: none;

    &:link {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
    transition: all 0.2s ease-in-out;
    :hover {
      filter: brightness(1.2);
      color: rgb(72, 38, 115, 1);
      transform: scale(1.1);
    }
  }
`;

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const visibleThreshold = 300;

  const waitThenHideNav = (seconds) => {
    const milliseconds = seconds * 1000;
    setTimeout(() => {
      setVisible(false);
    }, milliseconds);
  };

  const handleScroll = () => {
    // find current scroll position
    let currentScrollPos = window.pageYOffset;
    /* 
    IF statement logic:
    1 - if current scroll pos within visible threshold
    2 - if scrolling down & current scroll pos past visibile threshold
    3 - if scrollin down
    */
    if (currentScrollPos <= visibleThreshold) {
      setVisible(true);
    } else if (
      currentScrollPos > prevScrollPos &&
      currentScrollPos > visibleThreshold
    ) {
      setVisible(false);
    } else if (currentScrollPos < prevScrollPos) {
      console.log("scrolling up ");
      setVisible(true);
    }

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    //attach scroll listener
    window.addEventListener("scroll", handleScroll);
    //cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const scrollTo = function (id) {
    let el = document.getElementById(id);
    let coord = el.getBoundingClientRect();
    window.scrollTo(coord.left, coord.top);
  };

  return (
    <>
      <Wrapper className="nav" style={{ top: visible ? "0" : "-75px" }}>
        <a
          onClick={() => {
            scrollTo("section__jumbotron");
          }}
          style={{ textDecoration: "none" }}
        >
          <Logo id="nav__logo">
            <h1>&lt;sh/&gt;</h1>
          </Logo>
        </a>
        <NavMenu>
          <a
            onClick={() => waitThenHideNav(1)}
            href="#section__about"
            rel="noreferrer"
          >
            <li>About</li>
          </a>

          <a
            onClick={() => waitThenHideNav(1)}
            href="#section__skills"
            rel="noreferrer"
          >
            <li>Skills</li>
          </a>

          <a
            onClick={() => waitThenHideNav(1)}
            href="#section__projects"
            rel="noreferrer"
          >
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
