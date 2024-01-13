import { MachineIndicatorContainer } from '../machineIndicatorContainer/MachineIndicatorContainer';
import './MachineDataContainer.css';

function MachineDataContainer({ machine }) {
	/**
	 * Se obtiene el grupo de indicadores
	 */
	const indicators = machine.groupsData.find((group) => group.groupKey == '3');
	const date = new Date(machine.last_update);

	/**
	 * Constructor para el string de fecha a partir de la fecha ISO
	 */
	const dateString = `${date.getUTCDate()}/${
		date.getUTCMonth() + 1
	}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	return (
		<section className='machine_data__container'>
			<MachineIndicatorContainer indicators={indicators} />
			<div>
				<p className='machine_data__subtitle'>Empresa</p>
				<p className='machine_data__company'>{machine.company}</p>
			</div>
			<div>
				<p className='machine_data__subtitle'>Clase</p>
				<p>{machine.class} </p>
			</div>
			<div>
				<p className='machine_data__subtitle'>Estado</p>
				<div className='machine_data__state'>
					<div
						className={`machine_data__state_circle ${
							machine.working && 'machine_data__state_circle--active'
						}`}
					/>
					<p>{machine.working ? 'En movimiento' : 'Detenida'}</p>
				</div>
			</div>
			<div>
				<p className='machine_data__subtitle'>Ultima actualización</p>
				<p>{dateString}</p>
			</div>
		</section>
	);
}

export { MachineDataContainer };
