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
		<main className="flex-1 px-5 flex flex-col h-full py-10 gap-5 justify-evenly bg-veryDarkBlueBg text-white">
			<Link to="/">
				<button className="bg-darkBlue  text-white px-4 h-10 rounded">
					⬅️ Back
				</button>
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
