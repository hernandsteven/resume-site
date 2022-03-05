import React from "react";
import styled from "styled-components";

const FooterEl = styled.footer`
  display: flex;
  flex-direction: column;
  height: 5em;
  background-color: rgba(76, 191, 166, 0.85);
  justify-content: center;
  text-align: center;

  p {
    margin: 2px;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterEl>
        <p>Made with &#x1F496; by Steven Hernandez</p>
        <p> &copy; 2022 </p>
      </FooterEl>
    </>
  );
};

export default Footer;
