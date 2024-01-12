import './MachineDetail.css';
import MachineIndicatorContainer from './machineIndicatorContainer/MachineIndicatorContainer';

function MachineDetail({ machine }) {
	console.log(machine);
	return (
		<div className='machine_detail'>
			{!machine ? (
				<div className='machine_detail__empty_result'>
					<p>No se encontro la máquina con el id especificado</p>
				</div>
			) : (
				<>
					<div className='machine_detail__description'>
						<p>{machine.description}</p>
						<p className='machine_detail__description__id'>{machine.id}</p>
					</div>
					<div className='machine_detail__details_container'>
						<MachineIndicatorContainer machine={machine} />
					</div>
				</>
			)}
		</div>
	);
}

export { MachineDetail };
