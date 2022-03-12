import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 30%;
  @media screen and (max-width: 800px) {
    width: 25%;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Text = styled.span`
  font-size: 16px;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
