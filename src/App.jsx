import React, { useState } from 'react';
import Header from './components/layout/Header';
import Main from './pages/Country';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import './index.css';

function App() {
	const [theme, setTheme] = useState('dark-theme');
	const handleClick = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
		} else {
			setTheme('light-theme');
		}
	};
	console.log(theme);
	return (
		<CountryProvider>
			<div className={`${theme}`}>
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
