import { Loader } from '../../components/loader/Loader';
import { MachinesTable } from '../../components/machinesTable/MachinesTable';
import { useGetMachines } from '../../hooks/useGetMachines';

function MachinesSearch() {
	const { machinesList, loading } = useGetMachines('');
	return (
		<main className='main_container'>
			{loading ? <Loader /> : <MachinesTable machinesList={machinesList} />}
		</main>
	);
}

export { MachinesSearch };
