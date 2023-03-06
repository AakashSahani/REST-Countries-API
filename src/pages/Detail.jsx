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
		<main className="flex-1 px-5 md:px-[5%] flex flex-col h-full min-h-screen py-10 gap-5 justify-evenly">
			<Link to="/">
				<button className="px-4 h-10 rounded bg-white text-veryDarkBlueText dark:bg-darkBlue dark:text-white shadow-md">
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
