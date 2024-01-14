import { MachineGroupsContainer } from './machineGroupsContainer/MachineGroupsContainer';
import { MachineDataContainer } from './machineDataContainer/MachineDataContainer';
import './MachineDetail.css';

function MachineDetail({ machine }) {
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
					<div className='machine_detail__container'>
						<MachineDataContainer machine={machine} />
						<MachineGroupsContainer machine={machine} />
					</div>
				</>
			)}
		</div>
	);
}

export { MachineDetail };
