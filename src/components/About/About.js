import "./About.scss";
import styled from "styled-components";
import { EmojiHand } from "@styled-icons/fluentui-system-filled/EmojiHand";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";
import React, { useEffect } from "react";
import {
  Col,
  AnimationWrapper,
} from "../reusable-components/reusable-components";
import HeaderRow from "../reusable-components/HeaderRow";
import { device } from "../../util/media-queries";
import { springFadeIn, springFadeOut } from "../../data/animations";

const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-right: 15%;
  height: 100vh;
`;
const ChatBubble = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.5);
  color: rgb(72, 38, 115, 1);
  text-align: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px;

  @media ${device.mobileS} {
    width: 400px;
    height: 100px;
    font-size: 1.1rem;
  }

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    font-size: 1.3rem;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
    height: 150px;
    width: 400px;
  }

  @media ${device.laptop} {
    font-size: 1.7rem;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.5) transparent;
    border-width: 30px 30px 0;
    bottom: -30px;
    right: 0;
    margin-left: -19px;
    transform: skewX(45deg);
  }
`;

const EmojiWave = styled(EmojiHand)`
  color: #ffde34;

  @media ${device.mobileS} {
    width: 300px;
    height: 100px;
  }
  @media ${device.mobileM} {
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    font-size: 1.3rem;
  }

  @media ${device.tablet} {
    height: 200px;
    width: 400px;
  }

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const Blurb = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 1em;
  color: rgb(72, 38, 115, 1);
  font-size: 1.5em;

  align-items: center;
  overflow: hidden;

  @media ${device.mobileS} {
    font-size: 1.1rem;
  }

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    font-size: 1.3rem;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 1.7rem;
  }
`;

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.35 });
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
      <Wrapper ref={ref} id="section__about">
        <AnimationWrapper animate={animation}>
          <HeaderRow heading="About" />
        </AnimationWrapper>

        <Col>
          <GreetingWrapper>
            <ChatBubble>
              <p>Hello, nice to meet you!</p>
            </ChatBubble>
            <EmojiWave />
          </GreetingWrapper>

          <Blurb>
            My name is Steven Hernandez. I am currently a senior at CUNY Baruch
            College studying Computer Information Systems. I previously attended
            SUNY New Paltz and studied Computer Science. I have knowledge of
            Data Structures & Algorithims from previous courses. I was
            introduced to programming in junior year of highschool with basic
            HTML and CSS. Ever since then I knew I wanted to pursure a career in
            software engineering.
          </Blurb>
        </Col>
      </Wrapper>
    </>
  );
};

export default About;
