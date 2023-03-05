import React from 'react';
import PropTypes from 'prop-types';
function Theme({ theme, handleClick }) {
	const themeState =
		theme === 'light-theme' ? '🌙 Dark Theme' : '🌞 Light Theme';
	return (
		<button className="theme" onClick={handleClick}>
			{themeState}
		</button>
	);
}

Theme.propTypes = {
	theme: PropTypes.string,
	setTheme: PropTypes.func,
	handleClick: PropTypes.func,
};

export default Theme;
