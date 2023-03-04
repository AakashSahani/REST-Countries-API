import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CountryContext from '../../context/CountryContext';

function Search() {
	const { country, setCountry, getAllCountries } = useContext(CountryContext);
	const handleChange = (e) => {
		console.log(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// if (text === '') {
		// 	console.log('Please enter something');
		// } else {
		getAllCountries();
		// getAllCountries(text);
		// setText('');
		// setLoading(false);
		// }
	};
	return (
		<div className="search">
			{/* <Link to="/country"> */}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="🔍 Search for a country..."
					onChange={handleChange}
				/>
			</form>
			{/* </Link> */}
		</div>
	);
}

export default Search;
