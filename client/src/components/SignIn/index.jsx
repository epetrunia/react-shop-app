import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignInContainer, SignInTitle, ButtonsContainer } from './SignIn.style';

import FormInput from './../FormInput';
import CustomButton from './../CustomButton';
import {
  googleSignInStart,
  emailSignInStart,
} from './../../redux/user/actions';

function SignIn({ emailSignInStart, googleSignInStart }) {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
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
          value={email}
          label='Email'
          handleChange={handleChange}
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          label='Password'
          handleChange={handleChange}
        />
        <ButtonsContainer>
          <CustomButton type='submit'>sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            sign in with google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
