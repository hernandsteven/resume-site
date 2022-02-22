import React, { useEffect } from "react";
import styled from "styled-components";
import { DownArrow } from "@styled-icons/boxicons-regular/DownArrow";
import { device } from "../util/media-queries";
import useWindowDimensions from "../util/window-dimensions";
import steven_high_res from "../pictures/steven_high_res.jpeg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${(props) => props.height};
  width: 100%;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
`;

const ContentRow = styled.div`
  display: flex;
  padding: 1em;
  flex: 1;
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
    flex-direction: row;
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
  border-bottom: none;
  flex: 2;

  img {
    align-self: center;
    height: 75%;
    width: 90%;
    border-radius: 5px;
  }
`;

const Nameheader = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: bolder;
  font-size: 3em;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
`;

const Subheader = styled.h2`
  margin: 0;
  font-weight: 0.5;
`;
const ArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: none;
`;
const DownArrowIcon = styled(DownArrow)`
  height: 2em;
  color: #55bdca;
`;

const Jumbotron = () => {
  const { height } = useWindowDimensions();
  let jumbrotronHeight = `${height - 90}px`;
  //console.log("Calculating jumbotron height to be: " + jumbrotronHeight);
  return (
    <Wrapper height={jumbrotronHeight}>
      <ContentRow>
        <HeaderCol>
          <Nameheader className="font-sora-header">Steven Hernandez</Nameheader>
          <Subheader>Student & SWE </Subheader>
        </HeaderCol>
        <ImageCol>
          <img src={steven_high_res} alt={"steven_high_res"} />
        </ImageCol>
      </ContentRow>
      <ArrowWrapper>
        <DownArrowIcon />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default Jumbotron;
