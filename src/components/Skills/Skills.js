import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";
import { device } from "../../util/media-queries";
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
import {
  Header,
  AnimationWrapper,
} from "../reusable-components/reusable-components";
import HeaderRow from "../reusable-components/HeaderRow";
import { springFadeIn, springFadeOut } from "../../data/animations";

//JS  JAVA PYTHON OFFICE REACTJS NODEJS HTML5 CSS3 GIT JQUERY SQL
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 4em;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
`;

const Row = styled.div`
  padding: 2em;
  margin-bottom: 4em;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;
  align-items: center;

  @media ${device.mobileS} {
    svg {
      height: 75px;
      width: 75px;
    }
  }

  @media ${device.mobileM} {
    svg {
      height: 85px;
      width: 85px;
    }
  }

  @media ${device.mobileL} {
    svg {
      height: 110px;
      width: 110px;
    }
  }

  @media ${device.tablet} {
    svg {
      height: 120px;
      width: 120px;
    }
  }

  @media ${device.laptop} {
    width: 8em;
  }
`;
const ProficiencyRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  padding: 1%;
  align-items: center;
`;
const Beginner = styled.div`
  background-color: #ff1e00;
  border-radius: 360px;
  margin: 0.3em;

  @media ${device.mobileS} {
    height: 10px;
    width: 20px;
  }

  @media ${device.mobileL} {
    width: 2.26em;
    height: 1em;
  }
`;
const Intermediate = styled(Beginner)`
  background-color: #ffb017;
`;
const Proficient = styled(Beginner)`
  background-color: #00dc00;
`;

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(springFadeIn);
    } else {
      animation.start(springFadeOut);
    }
  }, [inView]);
  return (
    <>
      <Wrapper ref={ref} id="section__skills">
        <AnimationWrapper animate={animation}>
          <HeaderRow heading="Skills" />
        </AnimationWrapper>
        <SkillsWrapper>
          <Row>
            <LogoWrapper>
              <Javascript />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>

            <LogoWrapper>
              <Java />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>

            <LogoWrapper>
              <Python />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>
          </Row>
          <Row>
            <LogoWrapper>
              <Reactjs />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>

            <LogoWrapper>
              <Nodejs />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>

            <LogoWrapper>
              <Html5 />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>
          </Row>
          <Row>
            <LogoWrapper>
              <Css3 />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>

            <LogoWrapper>
              <Git />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>

            <LogoWrapper>
              <Microsoftoffice />
              <ProficiencyRow>
                <Beginner />
                <Intermediate />
                <Proficient />
              </ProficiencyRow>
            </LogoWrapper>
          </Row>
        </SkillsWrapper>
      </Wrapper>
    </>
  );
};

export default Skills;
