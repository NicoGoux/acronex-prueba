import { MachineIndicator } from '../machineIndicator/MachineIndicator';
import './MachineIndicatorContainer.css';

function MachineIndicatorContainer({ machine }) {
	return (
		<div className='machine_detail__indicators_container'>
			<MachineIndicator
				indicatorKey={'it'}
				indicatorHeader={machine.data_description.headers.it}
				value={machine.last.it}
			/>
			<MachineIndicator
				indicatorKey={'ie'}
				indicatorHeader={machine.data_description.headers.ie}
				value={machine.last.ie}
			/>
			<MachineIndicator
				indicatorKey={'id'}
				indicatorHeader={machine.data_description.headers.id}
				value={machine.last.id}
			/>
			<MachineIndicator
				indicatorKey={'ig'}
				indicatorHeader={machine.data_description.headers.ig}
				value={machine.last.ig}
			/>
		</div>
	);
}

export { MachineIndicatorContainer };
