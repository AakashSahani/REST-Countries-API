import React from 'react';
import { useState } from 'react';
function Theme() {
	const [theme, setTheme] = useState('dark');
	const handleClick = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	const themeState = theme === 'light' ? '🌙 Dark Theme' : '🌞 Light Theme';
	return (
		<button className="theme" onClick={handleClick}>
			{themeState}
		</button>
	);
}

export default Theme;
