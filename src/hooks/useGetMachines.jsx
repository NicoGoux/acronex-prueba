import { useEffect, useState } from 'react';

function useGetMachines(queryParams) {
	const [machinesList, setMachinesList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getMachines = async () => {
			try {
				const response = await fetch(
					`https://wrk.acronex.com/api/challenge/machines?${queryParams}`,
				);
				const machines = await response.json();
				setMachinesList(machines);
			} catch (error) {
				console.error('No se pudo obtener el listado de maquinas');
			} finally {
				setLoading(false);
			}
		};
		getMachines();
	}, [queryParams]);

	return { machinesList, loading };
}

export { useGetMachines };
