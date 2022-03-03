import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/framer-motion";
import { useAnimation } from "framer-motion/dist/framer-motion";
import React, { useEffect } from "react";

const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 14%;
  padding-right: 14%;
  margin-top: 1.5em;
  margin-bottom: 10px;
  height: 90vh;
`;

const WrapperRow = styled(motion.div)`
  display: flex;
  flex-direction: row;

  align-items: center;
  text-align: center;
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

const Project = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  outline: 1px solid white;
`;

const Content = styled.div``;

const Projects = () => {
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
      <WrapperCol ref={ref} id="section__projects">
        <WrapperRow animate={animation}>
          <Line />
          <HeaderRow>Projects</HeaderRow>
          <Line />
        </WrapperRow>

        <WrapperRow>
          <Project>
            To be added in the future. Meanwhile, check out my GitHub.
          </Project>
        </WrapperRow>
      </WrapperCol>
    </>
  );
};

export default Projects;
