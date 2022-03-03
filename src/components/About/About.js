import React, { useState, useEffect } from "react";
import "./About.scss";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { EmojiHand } from "@styled-icons/fluentui-system-filled/EmojiHand";
import { useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

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

const WrapperBlurb = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
  height: 100vh;
  margin-top: 10em;
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

const EmojiWave = styled(EmojiHand)`
  height: 15em;
  width: 15em;
`;

const Blurb = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 3em;
  color: rgb(72, 38, 115, 1);
  font-size: 1.5em;
  text-align: center;
  align-items: center;
  overflow: hidden;
`;

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
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
  }, [inView, animation]);

  return (
    <>
      <WrapperCol ref={ref} id="section__about">
        <WrapperRow animate={animation}>
          <Line />
          <HeaderRow>About</HeaderRow>
          <Line />
        </WrapperRow>

        <WrapperBlurb>
          <GreetingWrapper>
            <Blurb>Hello, nice to meet you!</Blurb>
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
        </WrapperBlurb>
      </WrapperCol>
    </>
  );
};

export default About;
