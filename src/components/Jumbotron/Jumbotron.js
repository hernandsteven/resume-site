import React, { useEffect } from "react";
import styled from "styled-components";
import { device } from "../../util/media-queries";
import {
  Row,
  Col,
  Header,
  AnimationWrapper,
} from "../reusable-components/reusable-components";
import { useAnimation } from "framer-motion/dist/framer-motion";
import steven_high_res from "../../pictures/steven_high_res.jpeg";
import { slideRightFadeIn, slideRightFadeOut } from "../../data/animations";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95vh;
  padding-top: 2%;
  padding-left: 14%;
  padding-right: 14%;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderCol = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  padding: 10px;
`;

const ImageCol = styled(HeaderCol)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  img {
    align-self: center;
    border-radius: 10px;
  }

  @media ${device.mobileS} {
    img {
      width: 20em;
    }
  }

  @media ${device.mobileM} {
    img {
      width: 25em;
    }
  }

  @media ${device.mobileL} {
    img {
      width: 30em;
    }
  }

  @media ${device.tablet} {
    img {
      width: 45em;
    }
  }

  @media ${device.laptop} {
    img {
      width: 55em;
    }
  }

  @media ${device.laptopL} {
    img {
      width: 65em;
    }
  }
`;

const Nameheader = styled.h1`
  margin: 0;
  padding: 0px;
  font-weight: bolder;

  @media ${device.mobileS} {
    font-size: 1.4rem;
  }

  @media ${device.mobileM} {
    font-size: 1.7rem;
  }

  @media ${device.mobileL} {
    font-size: 1.9rem;
  }

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const Subheader = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-weight: 0.5;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgb(72, 38, 115, 1);
  padding: 2px;
  border-radius: 10px;

  @media ${device.mobileS} {
    font-size: 1rem;
  }

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    font-size: 1.4rem;
  }

  @media ${device.tablet} {
    font-size: 1.7rem;
  }

  @media ${device.laptop} {
    font-size: 1.7rem;
  }
`;

const Jumbotron = () => {
  const animation = useAnimation();
  useEffect(() => {
    animation.start(slideRightFadeIn);
  }, []);

  return (
    <>
      <Wrapper id="section__jumbotron">
        <ContentRow>
          <HeaderCol>
            <AnimationWrapper animate={animation} initial={slideRightFadeOut}>
              <Nameheader>Steven Hernandez</Nameheader>
            </AnimationWrapper>
            <AnimationWrapper
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Subheader>Student & Aspiring SWE </Subheader>
            </AnimationWrapper>
          </HeaderCol>
          <AnimationWrapper
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{ type: "tween", duration: 2 }}
          >
            <ImageCol>
              <img src={steven_high_res} alt={"steven_high_res"} />
            </ImageCol>
          </AnimationWrapper>
        </ContentRow>
      </Wrapper>
    </>
  );
};

export default Jumbotron;
