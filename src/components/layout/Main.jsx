import React from 'react';
import { useState } from 'react';
import CountryData from '../../data/CountryData';
import CountryFilter from './CountryFilter';
import Card from '../shared/Card';

function Main() {
	const [country, setCountry] = useState(CountryData);
	return (
		<main>
			<CountryFilter />
			<Card country={country} />
		</main>
	);
}

export default Main;
