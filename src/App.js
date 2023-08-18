import { useCallback, useEffect, useState } from 'react';
import { getAllCountries, getCountry } from './api/countries';
import { findMutualNeighbor, shuffleArray } from './helpers';
import CountriesList from './components/CountriesList';
import NeighborsList from './components/NeighborsList';
import FlashMessage from './components/FlashMessage';
import './App.css';

const REQUIRED_COUNTRIES = 10;

const App = () => {
  const [countries, setCountries] = useState([]);
  const [neighbors, setNeighbors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getCountriesAndNeighbor();
  }, []);

  const getCountriesAndNeighbor = useCallback(async () => {
    try {
      const { data: countries } = await getAllCountries();

      const shuffledCountries = shuffleArray(countries);

      const selectedCountries = await getCountryNeighbor(shuffledCountries.slice(0, REQUIRED_COUNTRIES));

      const neighborPairs = findMutualNeighbor(selectedCountries);

      setCountries(selectedCountries);
      setNeighbors(neighborPairs);
    }
    catch (error) {
      setError(error?.message || 'Something went wrong');
    }
  }, []);

  const getCountryNeighbor = useCallback(async (data) => {
    const countryRequests = data.map(async (country) => {
      const countryDetails = await getCountry(country.url);

      return {
        name: countryDetails.data.names.name,
        neighbors: countryDetails.data.neighbors.map((neighbor) => neighbor.name),
      };
    });

    return Promise.all(countryRequests);
  }, []);

  const resetError = () => setError('');

  const renderIsNeighborFound = () => {
    if (!neighbors.length) return <p>No neighbors found</p>;

    else if (neighbors.length === 1) return <p>Mutual neighbors found</p>;

    return <p>Multiple Mutual neighbors found</p>;
  }

  const renderFlashMessage = () => {
    if (!error) return null;

    return <FlashMessage message={error} variant='error' onDurationEnd={resetError} />
  }

  return (
    <div className='container'>
      {renderFlashMessage()}

      {renderIsNeighborFound()}

      <button onClick={getCountriesAndNeighbor}>Generate Neighbors</button>

      <h2>Selected countries</h2>
      <CountriesList countries={countries} />

      <h2>Neighbors</h2>
      <NeighborsList neighbors={neighbors} />
    </div>
  );
}

export default App;
