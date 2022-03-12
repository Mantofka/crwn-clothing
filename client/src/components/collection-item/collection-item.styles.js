import styled from "styled-components";
import CustomButton from "../custom-bottom/custom-button.component";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { motion } from "framer-motion";

export const CollectionItemContainer = styled(motion.div)`
  cursor: pointer;
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
  @media screen and (max-width: 440px) {
    width: 45vw;
    height: 250px;
    margin-bottom: 1rem;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 75%;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  width: 70%;
  @media screen and (max-width: 800px) {
    opacity: 0.9;
    min-width: unset;
    padding: 0.2 0.4rem;
    top: 80%;
    height: 2.5rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 440px) {
    display: none;
  }
`;

export const IconShopping = styled(ShoppingIcon)`
  width: 20px;
  height: 20px;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
  margin-bottom: 15px;
`;
