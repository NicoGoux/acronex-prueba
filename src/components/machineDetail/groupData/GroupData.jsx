import './GroupData.css';
import { GroupDataValue } from './GroupDataValue/GroupDataValue';

function GroupData({ group }) {
	console.log(group);
	return (
		<div className='group'>
			<p className='group__name'>{group.groupName}</p>
			<div className='group__values_container'>
				{group.headers.map((header) => (
					<GroupDataValue key={header.headerKey} header={header} />
				))}
			</div>
		</div>
	);
}

export { GroupData };
