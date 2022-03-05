import React from "react";
import styled from "styled-components";
import { device } from "../../util/media-queries";

import steven_high_res from "../../pictures/steven_high_res.jpeg";
import { motion } from "framer-motion/dist/framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-top: 5%;
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
  flex: 1;
`;

const ImageCol = styled(HeaderCol)`
  display: flex;
  flex-direction: column;
  flex: 2;
  border-radius: 10px;

  img {
    align-self: center;
    border-radius: 10px;
  }

  @media ${device.mobileS} {
    img {
      height: 50%;
      width: 20em;
    }
  }

  @media ${device.mobileM} {
    img {
      height: 50%;
      width: 25em;
    }
  }

  @media ${device.mobileL} {
    img {
      height: 50%;
      width: 30em;
    }
  }

  @media ${device.tablet} {
    img {
      height: 50%;
      width: 55em;
    }
  }

  @media ${device.laptop} {
    img {
      height: 50%;
      width: 70em;
    }
  }
`;

const Nameheader = styled.h1`
  margin: 0;
  padding: 0px;
  font-weight: bolder;
  font-size: 3em;
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
`;

const Jumbotron = () => {
  return (
    <>
      <Wrapper id="section__jumbotron">
        <ContentRow>
          <HeaderCol>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Nameheader>Steven Hernandez</Nameheader>
            </motion.div>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Subheader>Student & Aspiring SWE </Subheader>
            </motion.div>
          </HeaderCol>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{ type: "tween", duration: 2 }}
          >
            <ImageCol>
              <img src={steven_high_res} alt={"steven_high_res"} />
            </ImageCol>
          </motion.div>
        </ContentRow>
      </Wrapper>
    </>
  );
};

export default Jumbotron;
