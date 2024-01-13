import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { MachinesTable } from '../../components/machinesTable/MachinesTable';
import { useGetMachines } from '../../hooks/useGetMachines';
import { useEffect } from 'react';

function MachinesSearchPage() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { searchResults, loading } = useGetMachines(searchParams.get('q'));

	useEffect(() => {
		if (!Array.isArray(searchResults)) {
			navigate(`/machines/${searchResults.id}`);
		}
	});

	return (
		<main className='main_container'>
			{loading ? (
				<Loader />
			) : (
				<>
					{Array.isArray(searchResults) && (
						<MachinesTable searchResults={searchResults} />
					)}
				</>
			)}
		</main>
	);
}

export { MachinesSearchPage };
