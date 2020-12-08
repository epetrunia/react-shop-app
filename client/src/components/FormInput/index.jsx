import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  InputLabel,
} from './FormInput.style';

function FormInput({ label, handleChange, ...props }) {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <InputLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </InputLabel>
      ) : null}
    </GroupContainer>
  );
}

export default FormInput;
