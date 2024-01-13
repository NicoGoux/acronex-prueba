import { MachineRow } from './MachineRow/MachineRow';
import './MachinesTable.css';

function MachinesTable({ searchResults }) {
	return (
		<div className='machines_table'>
			{searchResults && searchResults.length != 0 ? (
				<>
					{searchResults.map((machine) => (
						<MachineRow key={machine.id} machine={machine} />
					))}
				</>
			) : (
				<div className='machines_table__empty_result'>
					<p>No se encontraton máquinas con la descripción ingresada</p>
				</div>
			)}
		</div>
	);
}

export { MachinesTable };
