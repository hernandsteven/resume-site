import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/framer-motion";
import { useAnimation } from "framer-motion/dist/framer-motion";
import {
  Row,
  Col,
  Header,
  AnimationWrapper,
} from "../reusable-components/reusable-components";
import HeaderRow from "../reusable-components/HeaderRow";
import React, { useEffect } from "react";
import Card from "./Card";
import { project_data } from "../../data/project-data";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 10px;
  height: 90vh;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

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
      <Wrapper ref={ref} id="section__projects">
        <AnimationWrapper animate={animation}>
          <HeaderRow heading="Projects" />
        </AnimationWrapper>

        <Col>
          <Carousel>
            {project_data.map(
              ({ name, description, url, image, tech }, index) => (
                <Card
                  key={index}
                  name={name}
                  description={description}
                  url={url}
                  image={image}
                  tech={tech}
                ></Card>
              )
            )}
          </Carousel>
        </Col>
      </Wrapper>
    </>
  );
};

export default Projects;
