import React from 'react';

function Card({ country }) {
	console.log(country);
	return (
		<div className="card">
			<img src={country[0].flags.svg} alt="" />
			<h2>{country[0].name.common}</h2>
			<ul>
				<li>Population: {country[0].population}</li>
				<li>Region: {country[0].region}</li>
				<li>Capital: {country[0].capital}</li>
			</ul>
		</div>
	);
}

export default Card;
