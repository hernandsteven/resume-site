import React from "react";
import styled from "styled-components";

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 14%;
  padding-right: 14%;
`;

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
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

const About = () => {
  return (
    <>
      <WrapperCol id="section__about">
        <WrapperRow>
          <Line />
          <HeaderRow>About</HeaderRow>
          <Line />
        </WrapperRow>

        <p>
          Hello, my name is Steven Hernandez. I am currently a senior at Baruch
          College studying Computer Information Systems.
        </p>
      </WrapperCol>
    </>
  );
};

export default About;
