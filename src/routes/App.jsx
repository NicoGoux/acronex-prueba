import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { MachinesSearchPage } from './pages/MachinesSearchPage';
import { MachineDetailPage } from './pages/MachineDetailPage';

function App() {
	const [query, setQuery] = useState('');

	return (
		<>
			<BrowserRouter>
				<Header setQuery={setQuery} />
				<Routes>
					<Route
						path={'/'}
						element={<Navigate to={'/machines'} replace={true} />}
					/>
					<Route
						path={'/machines'}
						element={<MachinesSearchPage query={query} />}
					/>
					<Route path={'/machines/:id'} element={<MachineDetailPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
