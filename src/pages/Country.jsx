import React, { useEffect } from 'react';
import { useContext } from 'react';
import Card from '../components/shared/Card';
import CountryContext from '../context/CountryContext';
import Search from '../components/layout/Search';
import Filter from '../components/layout/Filter';

function Main() {
	const { getAllCountries, filtered } = useContext(CountryContext);
	useEffect(() => {
		getAllCountries();
	}, []);
	return (
		<main className="p-4 sm:px-[5%] flex flex-col min-h-screen">
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mt-5 gap-10 ">
				<Search />
				<Filter />
			</div>
			<div className="flex flex-wrap gap-12 flex-1 h-full md:mt-10">
				{filtered.length === 0
					? 'Loading Data...'
					: filtered.map((country, index) => (
							<Card key={index} country={country} />
					  ))}
			</div>
		</main>
	);
}

export default Main;
