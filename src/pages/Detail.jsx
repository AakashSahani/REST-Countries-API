import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardDetail from '../components/shared/CardDetail';
import CountryData from '../data/CountryData';

function Detail() {
	const [country, setCountry] = useState(CountryData);
	return (
		<main className="detail-main">
			<Link to="/">
				<button className="back">⬅️ Back</button>
			</Link>
			<CardDetail country={country} />
		</main>
	);
}

export default Detail;
