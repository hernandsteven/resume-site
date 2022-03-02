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
  padding-left: 30%;
  padding-right: 30%;
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

const Blurb = styled.p`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 10px;
  color: rgb(72, 38, 115, 1);
  font-size: 1.5em;
  text-align: center;
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

        <Blurb>
          Hello, my name is Steven Hernandez. I am currently a senior at CUNY
          Baruch College studying Computer Information Systems. I previously
          attended SUNY New Paltz and studied Computer Science. I have knowledge
          of Data Structures & Algorithims from previous courses. I was
          introduced to programming in junior year of highschool with basic HTML
          and CSS. Ever since then I knew I wanted to pursure a career in
          software engineering.
        </Blurb>
      </WrapperCol>
    </>
  );
};

export default About;
