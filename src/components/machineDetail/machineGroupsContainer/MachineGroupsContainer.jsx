import { GroupData } from '../groupData/GroupData';
import './MachineGroupsContainer.css';

function MachineGroupsContainer({ machine }) {
	return (
		<section className='groups_container'>
			{machine.groupsData.map((group) => (
				<GroupData key={group.groupKey} group={group} />
			))}
		</section>
	);
}

export { MachineGroupsContainer };
