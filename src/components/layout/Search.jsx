import React, { useContext, useState } from 'react';
import CountryContext from '../../context/CountryContext';

function Search() {
	const [text, setText] = useState('');
	const { country, getCountry } = useContext(CountryContext);
	const handleChange = (e) => {
		setText(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text != '') {
			console.log(text);
			getCountry(text);
			console.log(country);
		} else {
			console.log('please enter a value');
		}
		setText('');
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="w-full sm:w-fit md:w-1/3 h-12 flex items-center rounded-md shadow-md"
		>
			<input
				type="text"
				name="search"
				id="search"
				value={text}
				placeholder="Search for a country..."
				onChange={handleChange}
				className="w-full h-full px-4 rounded-md"
			/>
		</form>
	);
}

export default Search;
