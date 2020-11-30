import React from 'react';
import Input from './Input';

const SearchInput = ({ value, searchInputHandler }) => {
  return (
    <div>
      Filter by name:
      <Input
        type="text"
        value={value}
        changeHandler={searchInputHandler}
      />
    </div>
  );
};

export default SearchInput;