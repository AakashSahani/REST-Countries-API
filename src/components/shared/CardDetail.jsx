import React from 'react';

function CardDetail({ country }) {
	return (
		<div className="detail">
			<div className="detail-img">
				<img src={country[0].flags.svg} alt="Country Flag" />
			</div>
			<div className="detail-text">
				<h2>{country[0].name.official}</h2>
				<div className="container">
					<ul>
						<li>Native Name: {country[0].name.nativeName.aym.official}</li>
						<li>Population: {country[0].population}</li>
						<li>Region: Europe</li>
						<li>Sub Region: Western Europe</li>
						<li>Capital: Brussels</li>
					</ul>
					<ul>
						<li>Top Level Domain: .be</li>
						<li>Currencies: Euro</li>
						<li>Languages: Dutch,French,German</li>
					</ul>
				</div>
				<div className="border">
					<p>Border Countries: </p>
					<button>France</button>
					<button>Germany</button>
					<button>Netherlands</button>
				</div>
			</div>
		</div>
	);
}

export default CardDetail;
