import { MachineRow } from './MachineRow/MachineRow';
import './MachinesTable.css';

function MachinesTable({ machinesList }) {
	return (
		<div className='machines_table'>
			{machinesList.map((machine) => (
				<MachineRow key={machine.id} machine={machine} />
			))}
		</div>
	);
}

export { MachinesTable };
