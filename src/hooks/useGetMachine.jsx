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

				/**
				 * getGroupsData procesara los resultados obtenidos y asociara
				 *
				 */
				const machine = { ...result, groupsData: getGroupsData(result) };

				setSearchResult(machine);
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

function getGroupsData(machine) {
	const groups = machine.data_description.groups;
	const headers = machine.data_description.headers;
	const lastData = machine.last;
	const groupsWithData = [];

	for (const groupKey in groups) {
		/**
		 * No se considera el grupo 3 (indicadores)
		 */
		if (groupKey != 3) {
			const headersForGroup = [];
			for (const headerKey in headers) {
				/**
				 * Se considero que los headers que no incluyen el atributo g
				 * pertenecen al grupo general (por ejemplo, la bateria interna
				 * se muestra asi en el diseño)
				 */
				if (groupKey == 0) {
					if (
						(headers[headerKey].g == 0 || !headers[headerKey].g) &&
						lastData[headerKey]
					) {
						headersForGroup.push({
							headerKey: headerKey,
							headerName: headers[headerKey].n,
							headerUnity: headers[headerKey].u,
							headerHidden: headers[headerKey].h,
							lastValue: lastData[headerKey],
						});
					}
				} else if (headers[headerKey].g == groupKey && lastData[headerKey]) {
					headersForGroup.push({
						headerKey: headerKey,
						headerName: headers[headerKey].n,
						headerUnity: headers[headerKey].u,
						headerHidden: headers[headerKey].h,
						lastValue: lastData[headerKey],
					});
				}
			}
			if (headersForGroup.length != 0) {
				groupsWithData.push({
					groupKey: groupKey,
					groupName: groups[groupKey],
					headers: headersForGroup,
				});
			}
		}
	}
	return groupsWithData;
}

export { useGetMachine };
