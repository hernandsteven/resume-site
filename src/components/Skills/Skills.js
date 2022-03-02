import React from "react";
import styled from "styled-components";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Java } from "@styled-icons/simple-icons/Java";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Microsoftoffice } from "@styled-icons/simple-icons/Microsoftoffice";
import { Reactjs } from "@styled-icons/remix-fill/Reactjs";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Git } from "@styled-icons/boxicons-logos/Git";

//JS  JAVA PYTHON OFFICE REACTJS NODEJS HTML5 CSS3 GIT JQUERY SQL
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: 1.5em;
  padding-left: 10%;
  padding-right: 10%;
`;

const HeaderRow = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  padding: 2em;
  margin-top: 1em;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const LogoWrapper = styled.div`
  width: 9em;
  color: white;
`;
const ProficiencyRow = styled(Row)`
  padding: 0;
  margin: 0;
  align-items: center;
`;
const Beginner = styled.div`
  width: 2.26em;
  height: 1em;
  background-color: #ff1e00;
  border-radius: 360px;
`;
const Intermediate = styled(Beginner)`
  background-color: #ffb017;
`;
const Proficient = styled(Beginner)`
  background-color: #00dc00;
`;

const Line = styled.div`
  height: 2px;
  width: 40px;
  background-color: rgb(72, 38, 115, 1);
  border-radius: 360px;
  margin: 10px;
`;

const Skills = () => {
  return (
    <Wrapper>
      <HeaderRow id="section__skills">
        <Line />
        Skills
        <Line />
      </HeaderRow>
      <Row>
        <Col>
          <LogoWrapper>
            <Javascript />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Java style={{ marginBottom: "10px" }} />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Python />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          <LogoWrapper>
            <Reactjs />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Nodejs />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Html5 />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          <LogoWrapper>
            <Css3 />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Git />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Microsoftoffice style={{ marginBottom: "10px" }} />
            <ProficiencyRow>
              <Beginner />
              <Intermediate />
              <Proficient />
            </ProficiencyRow>
          </LogoWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Skills;
