import { GroupData } from '../groupData/GroupData';
import './MachineGroupsContainer.css';

function MachineGroupsContainer({ machine }) {
	const groupsData = getGroupsData(machine);
	return (
		<section className='groups_container'>
			{groupsData.map((group) => (
				<GroupData key={group.groupKey} group={group} />
			))}
		</section>
	);
}

function getGroupsData(machine) {
	const groups = machine.data_description.groups;
	const headers = machine.data_description.headers;
	const lastData = machine.last;
	const groupsWithData = [];

	console.log(lastData);
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
							lastValue: lastData[headerKey],
						});
					}
				} else if (
					headers[headerKey].g == groupKey &&
					headers[headerKey].h != true &&
					lastData[headerKey]
				) {
					headersForGroup.push({
						headerKey: headerKey,
						headerName: headers[headerKey].n,
						headerUnity: headers[headerKey].u,
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

export { MachineGroupsContainer };
