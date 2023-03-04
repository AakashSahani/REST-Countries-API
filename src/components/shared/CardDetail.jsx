import React from 'react';
import { Link } from 'react-router-dom';

function CardDetail({ country }) {
	console.log(country);
	return (
		<div className="detail">
			<div className="detail-img">
				<img src={country[0].flags.svg} alt="Country Flag" />
			</div>
			<div className="detail-text">
				<h2>{country[0].name.official}</h2>
				<div className="container">
					<ul>
						{/* <li>
							Native Name:{' '}
							{country[0].name.nativeName.common &&
								country[0].name.nativeName.common}
						</li> */}
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
								{Object.values(country[0].languages).map((l) => (
									<li>{l}</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
				<div className="border">
					<p>Border Countries: </p>
					{country[0].borders &&
						country[0].borders.map((border, index) => (
							<Link key={index} to={`/country/${border}`}>
								{border}
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}

export default CardDetail;
