import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 90%;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 85%;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  @media screen and (max-width: 800px) {
    font-size: 24px;
    margin: auto auto;
  }
`;
