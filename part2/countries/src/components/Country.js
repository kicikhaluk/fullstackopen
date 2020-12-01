import React, { useEffect, useState } from 'react';

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});

  const getWeather = async (city) => {
    try {
      const response = await fetch(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${city}&units=m`);
      const data = await response.json();
      setWeather(data.current);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather(country.capital);
  }, [country.capital]);

  const languages = country.languages.map(lang => <li key={lang.name}>{lang.name}</li>);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {languages}
      </ul>
      <img style={{ width: '300px' }} src={country.flag} alt="country flag" />
      <h3>Wheather in {country.capital}</h3>
      <p><strong>Temperature: </strong> {weather.temperature} Celcius</p>
      <img style={{ width: '300px' }} src={weather.weather_icons} alt="weather icon" />
      <p><strong>Wind: </strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
    </div>
  );
};

export default Country;