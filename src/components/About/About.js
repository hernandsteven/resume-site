import "./About.scss";
import styled from "styled-components";
import { EmojiHand } from "@styled-icons/fluentui-system-filled/EmojiHand";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/framer-motion";
import { useAnimation } from "framer-motion/dist/framer-motion";
import React, { useEffect } from "react";
import {
  Row,
  Col,
  Header,
  AnimationWrapper,
} from "../reusable-components/reusable-components";
import HeaderRow from "../reusable-components/HeaderRow";

const WrapperRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 14%;
  padding-right: 14%;
`;

const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
  height: 100vh;
`;

const Line = styled.div`
  height: 2px;
  width: 40px;
  background-color: rgb(72, 38, 115, 1);
  border-radius: 360px;
  margin: 10px;
`;

const EmojiWave = styled(EmojiHand)`
  height: 15em;
  width: 15em;
`;

const Blurb = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 3em;
  color: rgb(72, 38, 115, 1);
  font-size: 1.5em;
  text-align: justify;
  align-items: center;
  overflow: hidden;
`;

const ChatBubble = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgb(72, 38, 115, 1);
  font-family: Arial;
  font-size: 1.5em;
  font-weight: bold;
  line-height: 120px;
  text-align: center;
  width: 19em;
  height: 7em;
  border-radius: 5px;
  padding: 10px;

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

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.35 });
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
  }, [inView]);

  return (
    <>
      <Wrapper ref={ref} id="section__about">
        <AnimationWrapper animate={animation}>
          <HeaderRow heading="About" />
        </AnimationWrapper>

        <Col>
          <GreetingWrapper>
            <ChatBubble>Hello, nice to meet you!</ChatBubble>
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
