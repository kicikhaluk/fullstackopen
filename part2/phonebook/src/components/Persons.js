import React from 'react';
import Person from './Person';

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map(person => <Person
        key={person.name}
        name={person.name}
        phone={person.phone}
      />
      )}
    </>
  );
};

export default Persons;