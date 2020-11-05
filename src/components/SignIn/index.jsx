import React, { Component } from 'react';
import styles from './SignIn.module.scss';
import FormInput from './../FormInput';
import CustomButton from './../CustomButton';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.signIn}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            label={'Email'}
            handleChange={this.handleChange}
          />

          <FormInput
            name='password'
            type='password'
            value={password}
            label={'Password'}
            handleChange={this.handleChange}
          />

          <CustomButton type='submit'>sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
