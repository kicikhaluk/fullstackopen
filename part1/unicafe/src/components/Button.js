import React from 'react';

const Button = ({ onClickHandler, text }) => <button onClick={onClickHandler}>{text}</button>;

export default Button;