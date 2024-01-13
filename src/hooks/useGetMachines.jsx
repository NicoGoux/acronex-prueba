import { useEffect, useState } from 'react';

function useGetMachines(queryParams) {
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getMachines = async () => {
			try {
				const queryString = queryParams ? queryParams : '';
				const response = await fetch(
					`https://wrk.acronex.com/api/challenge/machines?q=${queryString}`,
				);

				/**
				 * Si la consulta se procesa de forma incorrecta
				 * (o no encuentra resultados)
				 * se arroja un error con el detalle del fallo
				 */
				if (response.status < 200 || response.status > 299) {
					const error = await response.json();
					throw new Error(error.detail);
				}

				const results = await response.json();
				setSearchResults(results);
			} catch (error) {
				console.log(error);
				console.error('No se encontraton máquinas con la descripción ingresada');
				setSearchResults([]);
			} finally {
				setLoading(false);
			}
		};
		getMachines();
	}, [queryParams]);

	return { searchResults, loading };
}

export { useGetMachines };
