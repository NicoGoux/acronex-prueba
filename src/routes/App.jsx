import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components/navbar/Header';
import { MachinesSearch } from './pages/MachinesSearch';

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
					<Route path={'/machines'} element={<MachinesSearch />} />
					<Route path={'/machines/:id'} element={<p>test page 2</p>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
