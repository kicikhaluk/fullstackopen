import React, { useState, useEffect } from 'react';
import phonebooks from './services';
import SearchInput from './components/SearchInput';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [searchByName, setSearchByName] = useState('');
  const [filteredBook, setFilteredBook] = useState([]);

  useEffect(() => {
    phonebooks
      .getPersons()
      .then(data => setPersons(data))
      .catch(err => console.log(err));
  }, []);

  const addContactHandler = (e) => {
    e.preventDefault();
    const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (!person) {
      phonebooks
        .addPerson({ id: persons.length + 1, name: newName, number: phoneNum })
        .then(data => {
          setPersons(persons.concat(data));
          setPhoneNum('');
          setNewName('');
        })
        .catch(err => console.log(err));
    } else {
      const index = persons.findIndex(p => p.id === person.id);
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        phonebooks
          .updatePerson({ ...person, number: phoneNum })
          .then(data => {
            const updatedPersons = [...persons];
            updatedPersons[index] = data
            setPersons(updatedPersons);
          });
        setPhoneNum('');
        setNewName('');
      };
    }
  };

  const deletePersonHandler = (personId, name) => {
    if (window.confirm(`Delete ${name}`)) {
      phonebooks.deletePerson(personId)
        .then(res => phonebooks.getPersons())
        .then(data => setPersons(data))
        .catch(err => console.log(err));
    }
  };


  const newNameInputHandler = (e) => {
    setNewName(e.target.value);
  };

  const newPhoneInputHandler = e => {
    setPhoneNum(e.target.value);
  };

  const searchInputHandler = e => {
    setSearchByName(e.target.value);
    const filteredPhoneBook = persons.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredBook(filteredPhoneBook);
  };

  let personList = <Persons persons={persons} deletePersonHandler={deletePersonHandler} />;

  if (filteredBook.length > 0) {
    personList = <Persons persons={filteredBook} deletePersonHandler={deletePersonHandler} />;
  }

  return (
    <>
      <h2>Phonebook</h2>
      <SearchInput
        value={searchByName}
        searchInputHandler={searchInputHandler}
      />

      <h3>Add a new</h3>
      <Form
        submitHandler={addContactHandler}
        nameValue={newName}
        phoneValue={phoneNum}
        nameInputHandler={newNameInputHandler}
        phoneInputHandler={newPhoneInputHandler}
      />
      <h3>Numbers</h3>
      {personList}
    </>
  );
}

export default App;
