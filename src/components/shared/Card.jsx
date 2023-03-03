import React from 'react';

function Card({ country }) {
	// console.log(country);
	return (
		<div className="card">
			<div className="flag">
				<img src={country.flags.svg} alt={country.flags.alt} />
			</div>
			<div className="card-text">
				<h2>{country.name.common}</h2>
				<ul>
					<li>Population: {country.population}</li>
					<li>Region: {country.region}</li>
					<li>Capital: {country.capital}</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
