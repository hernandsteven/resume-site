import React from "react";
import styled from "styled-components";

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 14%;
  padding-right: 14%;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
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

        <div style={{ height: "90vh" }}>afasfadsfj</div>
      </WrapperCol>
    </>
  );
};

export default Projects;
