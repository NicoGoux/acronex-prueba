import { useEffect, useState } from 'react';

function useGetMachine(id) {
	const [searchResult, setSearchResult] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getMachine = async () => {
			try {
				const response = await fetch(
					`https://wrk.acronex.com/api/challenge/machines/${id}`,
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

				const result = await response.json();
				setSearchResult(result);
			} catch (error) {
				console.log(error);
				console.error('No se encontro la máquina con el ID especificado');
				setSearchResult(null);
			} finally {
				setLoading(false);
			}
		};
		getMachine();
	}, [id]);

	return { searchResult, loading };
}

export { useGetMachine };
