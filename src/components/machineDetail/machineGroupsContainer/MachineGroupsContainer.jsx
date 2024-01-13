import { GroupData } from '../groupData/GroupData';
import './MachineGroupsContainer.css';

function MachineGroupsContainer({ machine }) {
	return (
		<section className='groups_container'>
			{machine.groupsData.map((group) => {
				/**
				 * Se excluye el grupo de indicadores
				 */
				if (group.groupKey != '3') {
					return <GroupData key={group.groupKey} group={group} />;
				}
			})}
		</section>
	);
}

export { MachineGroupsContainer };
