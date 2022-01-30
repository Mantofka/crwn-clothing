import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-bottom/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { SignInContainer, SignInTitle, Buttons } from "./sign-in.styles";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSumbit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <Buttons>
            <CustomButton type='submit' onClick={this.handleSumbit}>
              Sign In
            </CustomButton>
            <CustomButton
              type='button'
              onClick={() => signInWithGoogle()}
              isGoogleSignIn
            >
              Sign With Google
            </CustomButton>
          </Buttons>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
