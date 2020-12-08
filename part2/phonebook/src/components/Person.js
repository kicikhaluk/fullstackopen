import React from 'react';

const Person = ({ personId, name, phone, deletePersonHandler }) => {
  return (
    <>
      <p>{name} - {phone}</p>
      <button onClick={() => deletePersonHandler(personId, name)}>Delete</button>
    </>
  );
};

export default Person;