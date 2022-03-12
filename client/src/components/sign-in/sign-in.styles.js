import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const SignInTitle = styled.h1`
  margin: 10px 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    justify-content: space-around;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
