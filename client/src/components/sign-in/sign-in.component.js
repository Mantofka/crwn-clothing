import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-bottom/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import { SignInContainer, SignInTitle, Buttons } from "./sign-in.styles";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const googleSignInStartHandler = () => {
    dispatch(googleSignInStart());
  };

  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(emailSignInStart(email, password));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          label='Password'
          value={password}
          handleChange={handleChange}
          required
        />
        <Buttons>
          <CustomButton type='submit' onClick={handleSubmit}>
            Sign In
          </CustomButton>
          <CustomButton
            type='button'
            onClick={() => googleSignInStartHandler()}
            googleSignIn
          >
            Sign With Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
