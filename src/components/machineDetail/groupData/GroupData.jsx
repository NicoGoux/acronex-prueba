import './GroupData.css';

function GroupData({ group }) {
	return (
		<div className='group'>
			<p className='group__name'>{group.groupName}</p>
			<div className='group__values_container'>
				{group.headers.map((header) => {
					return (
						<div
							key={header.headerKey}
							className='group__header_value_container'
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
										{header.headerUnity}
									</>
								)}
							</p>
						</div>
					);
				})}
			</div>
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

export { GroupData };
