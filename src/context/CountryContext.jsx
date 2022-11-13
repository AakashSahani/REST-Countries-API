import { createContext, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [country, setCountry] = useState([]);
	const getCountry = async function () {
		await fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => setCountry((country) => country.push(data)))
			.catch((err) => {
				console.log(err.message);
			});
		console.log(country);
	};
	return (
		<CountryContext.Provider value={{ country, setCountry, getCountry }}>
			{children}
		</CountryContext.Provider>
	);
};

export default CountryContext;
