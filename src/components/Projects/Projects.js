import React from "react";
import styled from "styled-components";

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 14%;
  padding-right: 14%;
  margin-top: 1.5em;
  margin-bottom: 10px;
  height: 90vh;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  text-align: center;
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
  background-color: rgb(72, 38, 115, 1);
  border-radius: 360px;
  margin: 10px;
`;

const Project = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  outline: 1px solid white;
`;

const Content = styled.div``;

const Projects = () => {
  return (
    <>
      <WrapperCol id="section__projects">
        <WrapperRow>
          <Line />
          <HeaderRow>Projects</HeaderRow>
          <Line />
        </WrapperRow>

        <WrapperRow>
          <Project>
            To be added in the future. Meanwhile, check out my GitHub.
          </Project>
        </WrapperRow>
      </WrapperCol>
    </>
  );
};

export default Projects;
