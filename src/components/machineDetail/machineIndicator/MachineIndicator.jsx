import './MachineIndicator.css';

function MachineIndicator({ indicatorKey, indicatorHeader, value }) {
	let backgroundColorClass = '';
	if (value <= 0.1) backgroundColorClass = 'background_1';
	else if (value <= 0.2) backgroundColorClass = 'background_2';
	else if (value <= 0.35) backgroundColorClass = 'background_3';
	else if (value <= 0.5) backgroundColorClass = 'background_4';
	else backgroundColorClass = 'background_5';

	if (value != 0 && value && indicatorKey == 'ig') {
		value = (1 - value).toFixed(2);
	}

	return (
		<div className={`machine_indicator ${backgroundColorClass}`}>
			<p>{indicatorHeader.n}</p>
			<p className='machine_indicator__value'>
				{value != 0 && !value
					? '-'
					: `${Number.parseInt(value * 100)} ${indicatorHeader.u}`}
			</p>
		</div>
	);
}

export { MachineIndicator };
