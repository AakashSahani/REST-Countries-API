import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [country, setCountry] = useState([]);
	const [countries, setCountries] = useState([]);
	const [filtered, setFiltered] = useState(countries);
	const getAllCountries = async function () {
		await fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => setCountries((countries) => data))
			.catch((err) => {
				alert(err.message);
			});
	};
	const getCountry = async function (countryName) {
		await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
			.then((res) => res.json())
			.then((data) => setCountry((country) => data))
			.catch((err) => {
				alert(err.message);
			});
	};
	const filterCountries = (filter) => {
		const filtered =
			filter === ''
				? countries
				: countries.filter((country) =>
						country.continents[0].toLowerCase().includes(filter.toLowerCase())
				  );
		setFiltered(filtered);
	};
	return (
		<CountryContext.Provider
			value={{
				country,
				setCountry,
				getCountry,
				countries,
				setCountries,
				getAllCountries,
				filtered,
				setFiltered,
				filterCountries,
			}}
		>
			{children}
		</CountryContext.Provider>
	);
};

CountryProvider.propTypes = {
	children: PropTypes.object,
};

export default CountryContext;
