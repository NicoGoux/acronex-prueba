import { MachineIndicator } from '../machineIndicator/MachineIndicator';
import './MachineIndicatorContainer.css';

function MachineIndicatorContainer({ indicators }) {
	return (
		<div className='machine_detail__indicators_container'>
			{indicators.headers.map((indicator) => (
				<MachineIndicator
					key={indicator.headerKey}
					indicatorKey={indicator.headerKey}
					indicatorHeaderName={indicator.headerName}
					indicatorHeaderUnity={indicator.headerUnity}
					value={indicator.lastValue}
				/>
			))}
		</div>
	);
}

export { MachineIndicatorContainer };
