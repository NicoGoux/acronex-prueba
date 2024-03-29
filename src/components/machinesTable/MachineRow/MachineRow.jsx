import { useNavigate } from 'react-router-dom';
import './MachineRow.css';

function MachineRow({ machine }) {
	const navigate = useNavigate();

	const onClickMachineRow = () => {
		navigate(`/machines/${machine.id}`);
	};

	return (
		<div className='machine_row' onClick={onClickMachineRow}>
			<p className='machine_row__id'>({machine.id})</p>
			<p className='machine_row__description'>
				{machine.description} - {machine.company}
			</p>
			<div
				className={`machine_row__status_circle ${
					machine.working && 'machine_row__status_circle--active'
				}`}
			/>
		</div>
	);
}

export { MachineRow };
