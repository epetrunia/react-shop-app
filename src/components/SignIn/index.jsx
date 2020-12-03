import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SignInContainer, SignInTitle, ButtonsContainer } from './SignIn.style';

import FormInput from './../FormInput';
import CustomButton from './../CustomButton';
import { auth } from '../../firebase/utils';
import { googleSignInStart } from './../../redux/user/actions';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            label='Email'
            handleChange={this.handleChange}
          />

          <FormInput
            name='password'
            type='password'
            value={password}
            label='Password'
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
