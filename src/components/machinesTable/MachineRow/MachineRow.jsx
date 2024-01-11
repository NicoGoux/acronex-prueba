import './MachineRow.css';

function MachineRow({ machine }) {
	return (
		<div className='machine_row'>
			<p className='machine_row__id'>({machine.id})</p>
			<p className='machine_row__description'>{machine.description}</p>
			<div
				className={`machine_row__status_circle ${
					machine.working && 'machine_row__status_circle--active'
				}`}
			/>
		</div>
	);
}

export { MachineRow };
