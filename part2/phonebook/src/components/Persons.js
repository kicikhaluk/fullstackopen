import React from 'react';
import Person from './Person';

const Persons = ({ persons, deletePersonHandler }) => {
  return (
    <>
      {persons.map(person => <Person
        key={person.id}
        name={person.name}
        phone={person.number}
        personId={person.id}
        deletePersonHandler={deletePersonHandler}
      />
      )}
    </>
  );
};

export default Persons;