import React from "react";
import styled from "styled-components";
import { device } from "../util/media-queries";
import { Menu } from "@styled-icons/evaicons-solid/Menu";
import { useState } from "react";
import Jumbotron from "./Jumbotron";
import Skills from "./Skills";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${device.laptop} {
    margin-left: 350px;
  }

  @media ${device.desktop} {
    margin-left: 400px;
  }
`;
const HamburgerWrapper = styled(Wrapper)`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  /* background-color: #eff1f2;

  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;*/
`;
const Hamburger = styled(Menu)`
  height: 50px;
  color: #55bdca;
  cursor: pointer;
`;

const MainContent = () => {
  const [displayed, setDisplayed] = useState(true);
  const handleBurgerClick = () => {
    setDisplayed(!displayed);
    console.log(displayed);
  };
  return (
    <Wrapper>
      <HamburgerWrapper>
        <Hamburger onClick={() => handleBurgerClick()} />
      </HamburgerWrapper>
      <Jumbotron />
      <Skills />
    </Wrapper>
  );
};

export default MainContent;
