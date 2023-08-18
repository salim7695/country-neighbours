import React from 'react'

const CountryList = ({ countries }) => {
  if (!countries.length) return null;

  return (
    <ul>
      { countries.map((country) => <li key={country.name}>{country.name}</li>) }
    </ul>
  );
}

export default CountryList;
