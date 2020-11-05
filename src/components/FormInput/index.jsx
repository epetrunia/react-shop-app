import React from 'react';
import classNames from 'classnames';
import styles from './FormInput.module.scss';

function FormInput({ label, handleChange, ...otherProps }) {
  const labelStyles = classNames(styles.inputLabel, {
    [styles.shrink]: otherProps.value.length,
  });
  return (
    <div className={styles.container}>
      <input
        className={styles.formInput}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? <label className={labelStyles}>{label}</label> : null}
    </div>
  );
}

export default FormInput;
