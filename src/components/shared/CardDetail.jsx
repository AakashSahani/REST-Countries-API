import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardDetail({ country }) {
	Object.values(country[0].name.nativeName).map((value) =>
		console.log(value.official)
	);
	return (
		<div className="detail">
			<img src={country[0].flags.svg} alt="Country Flag" />

			<h2>{country[0].name.official}</h2>
			<ul>
				<li>
					Native names:{' '}
					{Object.values(country[0].name.nativeName).map((name, index) => (
						<p key={index}>{name.official}</p>
					))}
				</li>
				<li>Population: {country[0].population}</li>
				<li>Region: {country[0].region}</li>
				<li>Sub Region: {country[0].subregion}</li>
				<li>Capital: {country[0].capital}</li>
			</ul>
			<ul>
				<li>Top Level Domain: .be</li>
				<li>Currencies: Euro</li>
				<li className="lang">
					Languages:
					<ul>
						{Object.values(country[0].languages).map((l, index) => (
							<li key={index}>{l}</li>
						))}
					</ul>
				</li>
			</ul>
			<div className="border">
				<h3>Border Countries: </h3>
				<ul>
					{country[0].borders
						? country[0].borders.map((border, index) => (
								<li key={index}>
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
