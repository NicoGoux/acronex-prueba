import { useParams } from 'react-router-dom';
import { MachineDetail } from '../../components/machineDetail/MachineDetail';
import { useGetMachine } from '../../hooks/useGetMachine';
import { Loader } from '../../components/loader/Loader';

function MachineDetailPage() {
	const { id } = useParams();
	const { searchResult, loading } = useGetMachine(id);
	return (
		<main className='main_container'>
			{loading ? <Loader /> : <MachineDetail searchResult={searchResult} />}
		</main>
	);
}

export { MachineDetailPage };
