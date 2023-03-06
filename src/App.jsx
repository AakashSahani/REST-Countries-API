import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Main from './pages/Country';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import './index.css';

function App() {
	const [theme, setTheme] = useState('dark');
	const handleClick = () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}

		if (theme === 'light') {
			setTheme('dark');
			localStorage.theme = 'dark';
			document.body.classList = 'dark';
		} else {
			setTheme('light');
			localStorage.theme = 'light';
			document.body.classList = 'light';
		}
	};
	useEffect(() => {
		handleClick();
	}, []);
	return (
		<CountryProvider>
			<div className="bg-veryLightGrayBg text-veryDarkBlueText dark:bg-veryDarkBlueBg dark:text-white">
				<Header handleClick={handleClick} theme={theme} />
				<Router>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/country/:name" element={<Detail />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</Router>
			</div>
		</CountryProvider>
	);
}

export default App;
