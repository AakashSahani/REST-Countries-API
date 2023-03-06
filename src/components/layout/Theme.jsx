import React from 'react';
import PropTypes from 'prop-types';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
function Theme({ theme, handleClick }) {
	return (
		<button className="flex gap-2" onClick={handleClick}>
			<img
				src={theme === 'light' ? sun : moon}
				alt="Theme Toggle"
				className="w-7"
			/>
			{theme === 'light' ? 'Light' : 'Dark'} theme
		</button>
	);
}

Theme.propTypes = {
	theme: PropTypes.string,
	setTheme: PropTypes.func,
	handleClick: PropTypes.func,
};

export default Theme;
