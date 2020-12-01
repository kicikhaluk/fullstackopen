import React, { useState } from 'react';
import Country from './Country';

const Countries = ({ country }) => {
  const [showCountry, setShowCountry] = useState(false);

  const clickHander = () => {
    setShowCountry(prevstate => !prevstate);
  };

  return (
    <div>
      {country.name}
      <button onClick={clickHander}>Show</button>
      {showCountry && <Country country={country} />}
    </div>
  );
};

export default Countries;