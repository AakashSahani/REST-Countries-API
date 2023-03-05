import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ country }) {
	return (
		<div className="w-80 mx-auto my-10 bg-darkBlue text-white flex flex-col justify-between rounded-md shadow-md min-h-fit h-96">
			{country ? (
				<Link to={`/country/${country.name.common.toLowerCase()}`}>
					<img
						src={country.flags.svg}
						alt={country.flags.alt || country.name.common + 'Flag'}
						className="w-full object-cover rounded-t-md h-48"
					/>
					<div className="flex flex-col px-5 pb-10 h-48">
						<h2 className="font-bold text-lg my-4">{country.name.common}</h2>

						<p>
							<strong>Population: </strong>
							{new Intl.NumberFormat('en-IN', {
								maximumSignificantDigits: 3,
							}).format(parseInt(country.population))}
						</p>
						<p>
							<strong>Region: </strong>
							{country.region}
						</p>
						<p>
							<strong>Capital: </strong>
							{country.capital}
						</p>
					</div>
				</Link>
			) : (
				<p>Loading Data...</p>
			)}
		</div>
	);
}

Card.propTypes = {
	country: PropTypes.array,
};

export default Card;
