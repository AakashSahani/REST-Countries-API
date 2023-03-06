import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ country }) {
	return (
		<div className="w-72  bg-white text-veryDarkBlueText dark:bg-darkBlue dark:text-white mx-auto md:mx-0 my-10 flex flex-col justify-between rounded-md shadow-md min-h-fit h-96">
			{country ? (
				<Link to={`/country/${country.name.common.toLowerCase()}`}>
					<div className="w-full h-48">
						<img
							src={country.flags.svg}
							alt={country.flags.alt || country.name.common + 'Flag'}
							className={`w-full ${
								country.name.common === 'Nepal'
									? 'object-contain'
									: 'object-cover'
							} rounded-t-md h-48`}
						/>
					</div>
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
	country: PropTypes.object,
};

export default Card;
