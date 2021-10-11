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
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeaderRow = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  padding: 1em;
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
  color: #55bdca;
`;

const Skills = () => {
  return (
    <Wrapper>
      <HeaderRow>SKILLS</HeaderRow>
      <Row>
        <Col>
          <LogoWrapper>
            <Javascript />
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Java />
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Python />
          </LogoWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          <LogoWrapper>
            <Reactjs />
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Nodejs />
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Html5 />
          </LogoWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          <LogoWrapper>
            <Css3 />
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Git />
          </LogoWrapper>
        </Col>
        <Col>
          <LogoWrapper>
            <Microsoftoffice />
          </LogoWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Skills;
