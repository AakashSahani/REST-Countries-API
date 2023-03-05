import React, { useContext, useEffect, useState } from 'react';
import CountryContext from '../../context/CountryContext';

function Filter() {
	const { filterCountries } = useContext(CountryContext);
	const [filter, setFilter] = useState('');
	const handleSelect = (e) => {
		// if (e.currentTarget.value != '') {
		setFilter(e.currentTarget.value);
		// }
	};
	useEffect(() => {
		filterCountries(filter);
	}, [filter]);

	return (
		<form className="flex flex-col w-1/2 sm:w-fit shadow-md rounded-md bg-darkBlue text-white px-4 h-12 justify-center items-center">
			<label
				htmlFor="region"
				className="bg-darkBlue p-2 hidden"
				aria-hidden="false"
			>
				Filter by Region
			</label>
			<select
				className="text-white bg-darkBlue w-full"
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
