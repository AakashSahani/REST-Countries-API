import React from 'react';

function Filter() {
	return (
		<div className="flex flex-col w-1/2 sm:w-fit shadow-md rounded-md bg-darkBlue text-white px-4 h-12 justify-center items-center">
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
			>
				<option>Filter by Region</option>
				<option value="africa">Africa</option>
				<option value="america">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</div>
	);
}

export default Filter;
