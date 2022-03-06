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
import { springFadeIn, springFadeOut } from "../../data/animations";
import HeaderRow from "../reusable-components/HeaderRow";
import React, { useEffect } from "react";
import Card from "./Card";
import { project_data } from "../../data/project-data";
import { device } from "../../util/media-queries";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.laptopL} {
    flex-direction: row;
    height: 100vh;
  }
`;

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
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
