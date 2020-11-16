import React from 'react';
import styles from './CustomButton.module.scss';
import classNames from 'classnames';

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  const btnStyles = classNames(
    styles.button,
    {
      [styles.googleBtn]: isGoogleSignIn,
    },
    { [styles.inverted]: inverted }
  );
  return (
    <button className={btnStyles} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
