import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardDetail({ country }) {
	return (
		<div className="w-full mx-auto gap-4 flex flex-col flex-1 h-full md:flex-row md:items-center md:gap-40 my-4">
			<img
				src={country[0].flags.svg}
				alt="Country Flag"
				className="my-4 object-contain w-full aspect-auto flex-1"
			/>
			<div className="flex flex-col gap-4 flex-1">
				<h2 className="text-lg font-semibold md:my-5">
					{country[0].name.official}
				</h2>
				<div className="flex md:mb-10 md:gap-4">
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
						<li className="flex flex-col md:flex-row md:items-center md:gap-2">
							<strong>Languages: </strong>
							{Object.values(country[0].languages).map((l, index) => (
								<span key={index}>{l},</span>
							))}
						</li>
					</ul>
				</div>
				<div className="flex flex-col md:flex-row md:items-center md:gap-4">
					<strong>Border Countries: </strong>
					<ul className="flex flex-wrap gap-2 my-2">
						{country[0].borders
							? country[0].borders.map((border, index) => (
									<li
										key={index}
										className=" text-center rounded w-32  px-2 py-1  bg-white text-veryDarkBlueText dark:bg-darkBlue dark:text-white shadow-md"
									>
										<Link to={`/country/${border}`}>{border}</Link>
									</li>
							  ))
							: 'None'}
					</ul>
				</div>
			</div>
		</div>
	);
}

CardDetail.propTypes = {
	country: PropTypes.array,
};

export default CardDetail;
