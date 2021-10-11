import React from "react";
import { device } from "./util/media-queries";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const Wrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    max-width: 100vw;
  }

  @media ${device.laptop} {
    max-width: 100vw;
  }

  @media ${device.desktop} {
    max-width: 100vw;
  }
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    margin-left: 350px;
  }

  @media ${device.desktop} {
    margin-left: 400px;
  }
`;
const App = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <MainContent />
      </Wrapper>
    </>
  );
};

export default App;
