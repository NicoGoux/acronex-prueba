import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { MachinesSearchPage } from './pages/MachinesSearchPage';
import { MachineDetailPage } from './pages/MachineDetailPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path={'/'}
						element={<Navigate to={'/machines'} replace={true} />}
					/>
					<Route path={'/machines'} element={<MachinesSearchPage />} />
					<Route path={'/machines/:id'} element={<MachineDetailPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
