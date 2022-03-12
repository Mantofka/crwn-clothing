import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const quantityStyles = css`
  display: flex;
`;

export const CheckoutItemContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 440px) {
    padding: 5px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export const Arrow = styled.div`
  cursor: pointer;
  @media screen and (max-width: 800px) {
    :first-child {
      margin-right: 0.5rem;
    }
    :last-child {
      margin-left: 0.5rem;
    }
  }
`;

export const Value = styled.span`
  margin: 0 10px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const RemoveButton = styled(motion.div)`
  padding-left: 12px;
  cursor: pointer;
`;

export const Text = styled.span`
  width: 23%;
  ${({ quantity }) => quantity && `${quantityStyles}`}
  @media screen and (max-width: 800px) {
    width: 21%;
  }
  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
`;

export const TextAbsolute = styled.div`
  position: absolute;
  top: -5%;
  right: 2%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-weight: bold;
  font-size: 14px;
  @media screen and (max-width: 800px) {
    display: flex;
  }
  @media screen and (max-width: 440px) {
    width: 20px;
    height: 20px;
    top: -6%;
    right: 5%;
    font-size: 12px;
  }
`;
