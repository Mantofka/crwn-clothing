import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.googleSignIn) return GoogleSignInStyles;
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled(motion.button)`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getButtonStyles}
  @media screen and (max-width: 800px) {
    height: 60px;
    font-size: 18px;
    line-height: 30px;
    width: 100%;
    padding: 0 25px;
  }
`;
