import React from 'react';
import Header from './components/layout/Header';
import Main from './pages/Country';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';

function App() {
	return (
		<CountryProvider>
			<>
				<Header />
				<Router>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/country/:name" element={<Detail />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</Router>
			</>
		</CountryProvider>
	);
}

export default App;
