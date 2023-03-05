import React, { useContext, useState } from 'react';
import CountryContext from '../../context/CountryContext';

function Search() {
	const [text, setText] = useState('');
	const { getCountry, country } = useContext(CountryContext);
	const handleChange = (e) => {
		setText(e.currentTarget.value);
	};

	const handleSubmit = () => {
		// e.preventDefault();
		if (text != '') {
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
			className="bg-white text-veryDarkBlueText dark:bg-darkBlue dark:text-white w-full sm:w-fit md:w-1/3 h-12 flex items-center rounded-md shadow-md"
		>
			<input
				type="text"
				name="search"
				id="search"
				value={text}
				placeholder="Search for a country..."
				onChange={handleChange}
				className="bg-white text-veryDarkBlueText dark:bg-darkBlue dark:text-white w-full h-full px-4 rounded-md"
			/>
		</form>
	);
}

export default Search;
