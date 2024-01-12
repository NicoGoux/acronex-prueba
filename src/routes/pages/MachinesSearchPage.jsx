import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { MachinesTable } from '../../components/machinesTable/MachinesTable';
import { useGetMachines } from '../../hooks/useGetMachines';

function MachinesSearchPage() {
	const [searchParams] = useSearchParams();
	const { searchResults, loading } = useGetMachines(searchParams.get('q'));

	return (
		<main className='main_container'>
			{loading ? <Loader /> : <MachinesTable searchResults={searchResults} />}
		</main>
	);
}

export { MachinesSearchPage };
