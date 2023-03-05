import React from 'react';
import Theme from './Theme';
import PropTypes from 'prop-types';

function Header({ theme, handleClick }) {
	return (
		<header className="w-full flex justify-between py-10 px-5 sm:px-[5%] shadow-md">
			<h1 className="font-bold text-lg">Where in the world?</h1>
			<Theme theme={theme} handleClick={handleClick} />
		</header>
	);
}

Header.propTypes = {
	theme: PropTypes.string,
	setTheme: PropTypes.func,
	handleClick: PropTypes.func,
};

export default Header;
