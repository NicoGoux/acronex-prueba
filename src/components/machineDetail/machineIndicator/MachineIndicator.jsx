import './MachineIndicator.css';

function MachineIndicator({
	indicatorKey,
	indicatorHeaderName,
	indicatorHeaderUnity,
	value,
}) {
	let backgroundColorClass = '';
	if (value <= 0.1) backgroundColorClass = 'background_1';
	else if (value <= 0.2) backgroundColorClass = 'background_2';
	else if (value <= 0.35) backgroundColorClass = 'background_3';
	else if (value <= 0.5) backgroundColorClass = 'background_4';
	else backgroundColorClass = 'background_5';

	if (value != 0 && value != '-' && indicatorKey == 'ig') {
		value = (1 - value).toFixed(2);
	}

	if (value != '-') {
		value = `${Number.parseInt(value * 100)} ${indicatorHeaderUnity}`;
	}

	return (
		<div className={`machine_indicator ${backgroundColorClass}`}>
			<p>{indicatorHeaderName}</p>
			<p className='machine_indicator__value'>{value}</p>
		</div>
	);
}

export { MachineIndicator };
