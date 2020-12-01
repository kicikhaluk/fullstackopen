import React, { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [searchByName, setSearchByName] = useState('');
  const [filteredBook, setFilteredBook] = useState([]);

  const fetchPersons = async () => {
    try {
      const response = await fetch('http://localhost:5000/persons');
      const data = await response.json();
      setPersons(data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchPersons();
  }, []);

  const addContactHandler = (e) => {
    e.preventDefault();
    const isAlreadyExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase());
    if (!isAlreadyExists) {
      setPersons(persons.concat({ id: persons.length + 1, name: newName, number: phoneNum }));
      setPhoneNum('');
      setNewName('');
    } else {
      alert(`${newName} is already Exist`);
      setPhoneNum('');
      setNewName('');
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

  let personList = <Persons persons={persons} />;

  if (filteredBook.length > 0) {
    personList = <Persons persons={filteredBook} />;
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
