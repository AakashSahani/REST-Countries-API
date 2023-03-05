import React, { useContext, useEffect, useState } from 'react';
import CountryContext from '../../context/CountryContext';

function Filter() {
	const { filterCountries, countries } = useContext(CountryContext);
	const [filter, setFilter] = useState('');
	const handleSelect = (e) => {
		setFilter(e.currentTarget.value);
	};
	useEffect(() => {
		filterCountries(filter);
	}, [filter, countries]);

	return (
		<form
			className={`bg-white text-veryDarkBlueText dark:bg-darkBlue dark:text-white flex flex-col w-1/2 px-4 sm:w-fit shadow-md rounded-md h-12 justify-center items-center`}
		>
			<label htmlFor="region" className="hidden" aria-hidden="false">
				Filter by Region
			</label>
			<select
				className="w-full bg-white text-veryDarkBlueText dark:bg-darkBlue dark:text-white"
				name="region"
				id="region"
				onChange={handleSelect}
			>
				<option value="">Filter by Region</option>
				<option value="africa">Africa</option>
				<option value="america">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</form>
	);
}

export default Filter;
