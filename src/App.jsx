import Header from './components/layout/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryContext, { CountryProvider } from './context/CountryContext';
import { useContext } from 'react';

function App() {
	return (
		<CountryProvider>
			<div>
				<Header />
				<Router>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/country" element={<Detail />} />
					</Routes>
				</Router>
			</div>
		</CountryProvider>
	);
}

export default App;
