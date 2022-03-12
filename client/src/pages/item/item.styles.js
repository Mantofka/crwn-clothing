import styled from "styled-components";
import { motion } from "framer-motion";
import CustomButton from "../../components/custom-bottom/custom-button.component";

export const ItemPageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 3rem;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const Image = styled(motion.img)`
  border-radius: 2rem;
  width: clamp(300px, 30%, 40%);
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const InfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 2.4rem;
  margin: 1rem 0;
`;

export const Description = styled(motion.p)`
  font-size: 1.6rem;
  margin: 0;
  margin-top: 0.2rem;
  @media screen and (max-width: 440px) {
    font-size: 1.4rem;
  }
`;

export const Price = styled(motion.p)`
  font-size: 2rem;
  margin: 1rem 0;
  margin-top: 0.2rem;
  @media screen and (max-width: 440px) {
    font-weight: 900;
  }
`;

export const SupportingDetails = styled(motion.span)`
  margin: 0;
`;

export const AddButton = styled(CustomButton)`
  margin-top: 1rem;
  overflow: hidden;
`;

export const ExitButton = styled(motion.div)`
  color: black;
  cursor: pointer;
  height: 20px;
  @media screen and (max-width: 680px) {
    position: absolute;
    color: white;
    top: 1%;
    right: 5%;
  }
`;

export const Text = styled(motion.span)``;
