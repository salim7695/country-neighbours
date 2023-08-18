import axios from 'axios';

const COUNTRIES_URL = "https://travelbriefing.org/countries.json";

const getAllCountries = () => axios.get(COUNTRIES_URL);

const getCountry = (countryUrl) => axios.get(countryUrl);

export {
  getAllCountries,
  getCountry
}
