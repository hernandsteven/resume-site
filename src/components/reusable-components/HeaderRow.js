import React from "react";
import { Row, HeaderLine, Header } from "./reusable-components";

const HeaderRow = ({ heading }) => {
  return (
    <Row>
      <HeaderLine />
      <Header>{heading}</Header>
      <HeaderLine />
    </Row>
  );
};

export default HeaderRow;
