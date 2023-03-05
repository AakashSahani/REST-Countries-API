import React, { useState } from 'react';

function Search() {
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text != '') {
			console.log(text);
		} else {
			console.log('please enter a value');
		}
		setText('');
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="bg-darkBlue w-full sm:w-fit h-12 flex items-center rounded-md shadow-md"
		>
			<input
				type="text"
				name="search"
				id="search"
				value={text}
				placeholder="Search for a country..."
				onChange={handleChange}
				className="bg-darkBlue text-white w-full h-full px-4 rounded-md"
			/>
		</form>
	);
}

export default Search;
