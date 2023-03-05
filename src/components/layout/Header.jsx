import React from 'react';
import Theme from './Theme';

function Header() {
	return (
		<header className="w-full flex justify-between py-10 px-5 sm:px-[5%] shadow-md bg-darkBlue text-white">
			<h1 className="font-bold text-lg">Where in the world?</h1>
			<Theme />
		</header>
	);
}

export default Header;
