import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import CountryData from '../data/CountryData';
import CountryFilter from '../components/layout/CountryFilter';
import Card from '../components/shared/Card';
import CountryContext from '../context/CountryContext';

function Main() {
	const { country, setCountry, getCountry } = useContext(CountryContext);
	useEffect(() => {
		getCountry();
	}, []);
	console.log(country);
	return (
		<main>
			<CountryFilter />
			<div className="country-grid">
				{country.length === 0
					? 'Loading Data...'
					: country.map((cntry) => <Card country={cntry} />)}
				hello
				{/* <Card country={country} /> */}
			</div>
		</main>
	);
}

export default Main;
