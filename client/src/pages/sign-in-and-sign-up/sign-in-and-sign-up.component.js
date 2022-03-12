import React, { lazy, Suspense } from "react";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";
import Spinner from "../../components/spinner/spinner.component";

const SignIn = lazy(() => import("../../components/sign-in/sign-in.component"));
const SignUp = lazy(() => import("../../components/sign-up/sign-up.component"));

const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer className='sign-in-and-sign-up'>
      <Suspense fallback={<Spinner />}>
        <SignIn />
        <SignUp />
      </Suspense>
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
