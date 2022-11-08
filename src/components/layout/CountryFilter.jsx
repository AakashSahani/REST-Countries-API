import React from 'react';
import Search from './Search';
import Filter from './Filter';

function CountryFilter() {
	return (
		<div className="country-filter">
			<Search />
			<Filter />
		</div>
	);
}

export default CountryFilter;
