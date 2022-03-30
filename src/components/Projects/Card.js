import React from "react";
import styled from "styled-components";
import "./Card.scss";
import { redirectTo } from "../../util/redirect.js";
import { device } from "../../util/media-queries";

const cardWidth = 350;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  @media ${device.mobileS} {
    margin: 2em;
  }
`;

const HeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  height: 25em;
  width: ${cardWidth}px;
  justify-content: center;
  align-items: center;
  padding: 2em;
  text-align: justify;
  color: rgb(72, 38, 115, 1);
  overflow-y: scroll;
  @media ${device.mobileS} {
    width: 350px;
  }
  @media ${device.laptopL} {
    width: ${cardWidth}px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: rgb(72, 38, 115, 0.5);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(72, 38, 115, 0.8);
  }
`;

const NameSubBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 2px;
  height: 5em;
  width: ${cardWidth}px;
  color: rgb(72, 38, 115, 1);
`;

const TechSubBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 2px;
  height: 5em;
  color: rgb(72, 38, 115, 1);
  width: ${cardWidth}px;
  padding: 1%;
`;

const PreviewImage = styled.img`
  margin-top: 0;
  border-radius: 10px;
  height: 11em;
  width: 15em;
`;

const Icon = styled.div`
  height: 3em;
  width: 3em;
  color: red;
`;

const Card = ({ name, description, url, image, tech }) => {
  return (
    <>
      <Wrapper
        className="card"
        onClick={() => {
          redirectTo(url);
        }}
      >
        <NameSubBox>
          <h1>{name}</h1>
        </NameSubBox>
        <HeadingBox>
          <PreviewImage src={image} />
          <p>{description}</p>
        </HeadingBox>
        <TechSubBox>
          {tech.map((Icon, index) => (
            <Icon />
          ))}
        </TechSubBox>
      </Wrapper>
    </>
  );
};

export default Card;
