import './GroupDataValue.css';

function GroupDataValue({ header }) {
	return (
		<div
			className={`group__header_value_container ${
				header.headerHidden ? 'group__header_value_container--hidden' : ''
			}`}
		>
			<p className='group__header'>{header.headerName}</p>
			<p>
				{header.headerKey == 'time' ? (
					`${getDate(header)}`
				) : (
					<>
						{Array.isArray(header.lastValue)
							? `${header.lastValue.join(' ')}`
							: header.lastValue}{' '}
						{header.lastValue != '-' && header.headerUnity}
					</>
				)}
			</p>
		</div>
	);
}

function getDate(header) {
	const date = new Date(header.lastValue * 1000);

	const dateString = `${date.getUTCDate()}/${
		date.getUTCMonth() + 1
	}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	return dateString;
}

export { GroupDataValue };
