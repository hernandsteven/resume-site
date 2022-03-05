import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.h1`
  font-size: 2em;
`;

export const HeaderLine = styled.div`
  height: 4px;
  width: 20px;
  background-color: rgb(72, 38, 115, 1);
  border-radius: 360px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const AnimationWrapper = styled(motion.div)``;
