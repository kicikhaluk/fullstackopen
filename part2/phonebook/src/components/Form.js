import React from 'react';
import Input from './Input';

const Form = ({ submitHandler, nameValue, nameInputHandler, phoneValue, phoneInputHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        name:
          <Input
          type='text'
          value={nameValue}
          changeHandler={nameInputHandler}
          required
        />
      </div>
      <div>
        number:
        <Input
          type='tel'
          value={phoneValue}
          changeHandler={phoneInputHandler}
          required
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;