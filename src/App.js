import React from "react";
import { device } from "./util/media-queries";
import styled from "styled-components";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";

const Wrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: rgba(76, 191, 166, 0.9);
  color: white;

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
        <Aside />
        <Navbar />
        <Jumbotron />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </Wrapper>
    </>
  );
};

export default App;
