import { useEffect, useState } from 'react';

function useGetMachines(queryParams) {
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getMachines = async () => {
			try {
				const response = await fetch(
					`https://wrk.acronex.com/api/challenge/machines?q=${queryParams}`,
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
				/**
				 * En caso de que se busque por un id especifico (lo que devuelve
				 * un objecto en lugar de un array), se coloca el objeto dentro de
				 * un array vacio para que sea mostrado en la tabla de maquinas.
				 */
				const searchResults = Array.isArray(results) ? results : [results];
				setSearchResults(searchResults);
			} catch (error) {
				console.log(error);
				console.error('No se pudo obtener el listado de maquinas');
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
