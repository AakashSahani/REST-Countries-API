import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CardDetail from '../components/shared/CardDetail';
import CountryContext from '../context/CountryContext';
import { useParams } from 'react-router-dom';

function Detail() {
	const { country, getCountry } = useContext(CountryContext);
	const { name: countryName } = useParams();
	useEffect(() => {
		getCountry(countryName);
	}, [countryName]);
	return (
		<main className="detail-main">
			<Link to="/">
				<button className="back">⬅️ Back</button>
			</Link>
			{country.length === 0 ? (
				'Loading Country Info'
			) : (
				<CardDetail country={country} />
			)}
		</main>
	);
}

export default Detail;
