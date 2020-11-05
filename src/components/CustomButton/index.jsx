import React from 'react';
import styles from './CustomButton.module.scss';

function CustomButton({ children, ...otherProps }) {
  return (
    <button className={styles.button} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
