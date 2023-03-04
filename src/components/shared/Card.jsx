import React from 'react';
import { Link } from 'react-router-dom';

function Card({ country }) {
	return (
		<div className="card">
			<Link to={`/country/${country.name.common.toLowerCase()}`}>
				<div className="flag">
					<img
						src={country.flags.svg}
						alt={country.flags.alt || country.name.common + 'Flag'}
					/>
				</div>
				<div className="card-text">
					<h2>{country.name.common}</h2>
					<ul>
						<li>Population: {country.population}</li>
						<li>Region: {country.region}</li>
						<li>Capital: {country.capital}</li>
					</ul>
				</div>
			</Link>
		</div>
	);
}

export default Card;
