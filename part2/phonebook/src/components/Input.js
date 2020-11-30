import React from 'react';

const Input = ({ changeHandler, ...props }) => {
  return (
    <input
      {...props}
      onChange={changeHandler}
    />
  );
};

export default Input;