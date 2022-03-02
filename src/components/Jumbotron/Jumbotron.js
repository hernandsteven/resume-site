import React, { useEffect } from "react";
import styled from "styled-components";
import { DownArrow } from "@styled-icons/boxicons-regular/DownArrow";
import { device } from "../../util/media-queries";
import useWindowDimensions from "../../util/window-dimensions";
import steven_high_res from "../../pictures/steven_high_res.jpeg";
import { motion } from "framer-motion/dist/framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${(props) => props.height};
  padding-top: 5%;
  padding-left: 14%;
  padding-right: 14%;
`;

const ContentRow = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column-reverse;
  }
  @media ${device.mobileM} {
    flex-direction: column-reverse;
  }
  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }

  @media ${device.laptop} {
    //flex-direction: row;
  }
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

  img {
    align-self: center;
    height: 75%;
    width: 70%;
    border-radius: 10px;
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

const imageAnimation = {};

const Jumbotron = () => {
  const { height, width } = useWindowDimensions();
  let jumbrotronHeight = `${height}px`;
  //console.log("Calculating jumbotron height to be: " + jumbrotronHeight);
  return (
    <>
      <Wrapper id="section__jumbotron" height={jumbrotronHeight}>
        <ContentRow>
          <HeaderCol>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -width / 2, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Nameheader>Steven Hernandez</Nameheader>
            </motion.div>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: width / 2, opacity: 0 }}
              transition={{ duration: 2.5 }}
            >
              <Subheader>Student & Aspiring SWE </Subheader>
            </motion.div>
          </HeaderCol>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -height / 2, opacity: 0 }}
            transition={{ duration: 2 }}
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
