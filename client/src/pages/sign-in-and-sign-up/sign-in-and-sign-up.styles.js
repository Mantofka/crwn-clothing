import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
`;
