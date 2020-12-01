import React, { useEffect, useState } from 'react';
import Countries from './components/Countries';
import Country from './components/Country';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);


  const fetchCountriesAll = async () => {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountriesAll();
  }, []);

  const searchCountryHandler = (e) => {
    const searchedCountry = e.target.value;
    setSearchVal(searchedCountry);
    filteredCountriesList(searchedCountry);
  };

  const filteredCountriesList = (searched) => {
    const countriesList = countries.filter(country => country.name.toLowerCase().includes(searched.toLowerCase()));
    setFilteredCountries(countriesList);
  };

  let searchedCountries;
  if (filteredCountries.length > 9) {
    searchedCountries = <p>Too many matches, specify another filter</p>;
  }

  if (filteredCountries.length > 1 && filteredCountries.length < 10) {
    searchedCountries = filteredCountries.map(country => <Countries key={country.numericCode} country={country} />);
  }
  if (filteredCountries.length === 1) {
    searchedCountries = <Country country={filteredCountries[0]} />;
  }

  return (
    <>
      <div>
        find countries:
        <input
          type="text"
          value={searchVal}
          onChange={searchCountryHandler}
        />
      </div>
      {searchedCountries}
    </>
  );
}

export default App;
