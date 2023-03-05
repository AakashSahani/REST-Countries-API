import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardDetail({ country }) {
	console.log(country);

	return (
		<div className="w-full mx-auto gap-4 flex flex-col my-4">
			<img
				src={country[0].flags.svg}
				alt="Country Flag"
				className="my-4 object-contain w-full aspect-auto"
			/>

			<h2 className="text-lg font-semibold">{country[0].name.official}</h2>
			<ul className="flex flex-col gap-2">
				<li>
					<strong>Native names: </strong>
					{Object.values(country[0].name.nativeName)[0].official}
				</li>
				<li>
					<strong>Population: </strong>
					{new Intl.NumberFormat('en-IN', {
						maximumSignificantDigits: 3,
					}).format(parseInt(country[0].population))}
				</li>
				<li>
					<strong>Region: </strong>
					{country[0].region}
				</li>
				<li>
					<strong>Sub Region: </strong>
					{country[0].subregion}
				</li>
				<li>
					<strong>Capital: </strong>
					{country[0].capital}
				</li>
			</ul>
			<ul className="flex gap-2 flex-col">
				<li>
					<strong>Top Level Domain: </strong>
					{country[0].tld.map((t, index) => (
						<span key={index}>{t}</span>
					))}
				</li>
				<li>
					<strong>Currencies: </strong>
					{Object.values(country[0].currencies).map((currency, index) => (
						<span key={index}>{currency.name}</span>
					))}
				</li>
				<li>
					<strong>Languages: </strong>
					{Object.values(country[0].languages).map((l, index) => (
						<span key={index}>{l}</span>
					))}
				</li>
			</ul>
			<div>
				<strong>Border Countries: </strong>
				<ul className="flex flex-wrap gap-2 my-2">
					{country[0].borders
						? country[0].borders.map((border, index) => (
								<li
									key={index}
									className="bg-darkBlue text-white flex-1 text-center rounded w-fit min-w-20  px-2 py-1"
								>
									<Link to={`/country/${border}`}>{border}</Link>
								</li>
						  ))
						: 'None'}
				</ul>
			</div>
		</div>
	);
}

CardDetail.propTypes = {
	country: PropTypes.array,
};

export default CardDetail;
