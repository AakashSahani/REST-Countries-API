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
		<div className="search">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="search"
					id="search"
					value={text}
					placeholder="🔍 Search for a country..."
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}

export default Search;
