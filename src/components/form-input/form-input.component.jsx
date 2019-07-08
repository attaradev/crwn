import React from 'react';
import './form-input.styles.scss';

export const FormInput = ({ label, name, ...inputProps }) => (
  <div className='input-group'>
    {
      label
        ? (
          <label
            className={`${inputProps.value.length ? 'shrink ' : ''}form-input-label`}
            htmlFor={name}>{label}
          </label>
        )
        : null
    }
    <input
      className='form-input'
      name={name}
      {...inputProps}
    />
  </div>
);