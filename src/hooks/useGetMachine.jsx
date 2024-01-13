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
				 * cada grupo no vacio con su correspondientes ultimos valores
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
		const headersForGroup = getHeadersForGroup(headers, lastData, groupKey);

		if (headersForGroup.length != 0) {
			groupsWithData.push({
				groupKey: groupKey,
				groupName: groups[groupKey],
				headers: headersForGroup,
			});
		}
	}
	return groupsWithData;
}

function getHeadersForGroup(headers, lastData, groupKey) {
	const headersForGroup = [];
	const lastDataKeys = Object.keys(lastData);

	for (const headerKey in headers) {
		const header = headers[headerKey];
		const lastValue = lastData[headerKey];
		/**
		 * Se considero que los headers que no incluyen el atributo g
		 * pertenecen al grupo general (por ejemplo, la bateria interna
		 * se muestra asi en el diseño)
		 */

		switch (groupKey) {
			case '0':
				if (lastDataKeys.includes(headerKey) && (header.g == 0 || !header.g)) {
					headersForGroup.push(headerWithValue(headerKey, header, lastValue));
				}
				break;
			case '3':
				if (
					header.g == groupKey &&
					/**
					 * Se consideran solo los indicadores indicados para pulverizadoras
					 */
					['it', 'ie', 'id', 'ig'].includes(headerKey)
				) {
					headersForGroup.push(headerWithValue(headerKey, header, lastValue));
				}
				break;

			default:
				if (header.g == groupKey && lastDataKeys.includes(headerKey)) {
					headersForGroup.push(headerWithValue(headerKey, header, lastValue));
				}
		}
	}
	return headersForGroup;
}

function headerWithValue(headerKey, header, lastValue) {
	return {
		headerKey: headerKey,
		headerName: header.n,
		headerUnity: header.u,
		headerHidden: header.h,
		lastValue: !lastValue && lastValue != 0 ? '-' : lastValue,
	};
}

export { useGetMachine };
