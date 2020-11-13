import React from 'react';
import styles from './SignInSignUp.module.scss';
import SignUp from '../../components/SignUp';
import SignIn from './../../components/SignIn';

function SignInSignUp() {
  return (
    <div className={styles.container}>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInSignUp;
