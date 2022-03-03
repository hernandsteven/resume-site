import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";
import { motion } from "framer-motion/dist/framer-motion";

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
  justify-content: center;
  width: 100%;
  height: 120vh;
  margin-top: 6em;
  padding-left: 10%;
  padding-right: 10%;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const HeaderRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  padding: 2em;
  margin-bottom: 6em;
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
  width: 6em;
  color: white;
`;
const ProficiencyRow = styled(Row)`
  display: flex;
  justify-content: space-evenly;
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
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
    } else {
      animation.start({
        y: 300,
        opacity: 0,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
    }
    console.log(inView);
  }, [inView, animation]);
  return (
    <>
      <Wrapper ref={ref} id="section__skills">
        <HeaderRow animate={animation}>
          <Line />
          <h1>Skills</h1>
          <Line />
        </HeaderRow>
        <SkillsWrapper>
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
        </SkillsWrapper>
      </Wrapper>
    </>
  );
};

export default Skills;
