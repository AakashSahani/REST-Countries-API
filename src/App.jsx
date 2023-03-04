import React from 'react';
import Header from './components/layout/Header';
import Main from './pages/Country';
import Detail from './pages/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';

function App() {
	return (
		<CountryProvider>
			<div>
				<Header />
				<Router>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/country/:name" element={<Detail />} />
					</Routes>
				</Router>
			</div>
		</CountryProvider>
	);
}

export default App;
