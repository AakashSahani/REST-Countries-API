import React, { useEffect } from 'react';
import { useContext } from 'react';
import CountryFilter from '../components/layout/CountryFilter';
import Card from '../components/shared/Card';
import CountryContext from '../context/CountryContext';

function Main() {
	const { countries, getAllCountries } = useContext(CountryContext);
	useEffect(() => {
		getAllCountries();
	}, []);
	return (
		<main>
			<CountryFilter />
			<div className="country-grid">
				{countries.length === 0
					? 'Loading Data...'
					: countries.map((country, index) => (
							<Card key={index} country={country} />
					  ))}
			</div>
		</main>
	);
}

export default Main;
