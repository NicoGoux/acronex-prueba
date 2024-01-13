import './GroupData.css';

function GroupData({ group }) {
	return (
		<div className='group'>
			<p className='group__name'>{group.groupName}</p>
			<div className='group__values_container'>
				{group.headers.map((header) => (
					<div key={header.headerKey} className='group__header_value_container'>
						<p className='group__header'>{header.headerName}</p>
						<p>
							{Array.isArray(header.lastValue)
								? `${header.lastValue.join(' ')}`
								: header.lastValue}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export { GroupData };
