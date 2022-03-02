import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 14%;
  padding-right: 14%;
`;

const HeaderRow = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  height: 2px;
  width: 40px;
  background-color: white;
  margin: 10px;
`;

const Projects = () => {
  return (
    <>
      <Wrapper id="#section__projects">
        <Line />
        <HeaderRow>Projects</HeaderRow>
        <Line />
      </Wrapper>
    </>
  );
};

export default Projects;
