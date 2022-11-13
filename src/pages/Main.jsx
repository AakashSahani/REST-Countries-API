import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import CountryData from '../data/CountryData';
import CountryFilter from '../components/layout/CountryFilter';
import Card from '../components/shared/Card';
import CountryContext from '../context/CountryContext';

function Main() {
	const [country, setCountry] = useState(CountryData);
	return (
		<main>
			<CountryFilter />
			<div className="country-grid">
				<Card country={country} />
			</div>
		</main>
	);
}

export default Main;
