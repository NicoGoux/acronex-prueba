import { Loader } from '../../components/loader/Loader';
import { MachinesTable } from '../../components/machinesTable/MachinesTable';
import { useGetMachines } from '../../hooks/useGetMachines';

function MachinesSearchPage({ query }) {
	const { searchResults, loading } = useGetMachines(query);

	return (
		<main className='main_container'>
			{loading ? <Loader /> : <MachinesTable searchResults={searchResults} />}
		</main>
	);
}

export { MachinesSearchPage };
