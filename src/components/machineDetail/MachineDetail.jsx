import './MachineDetail.css';

function MachineDetail({ searchResult }) {
	return (
		<div className='machine_detail'>
			{!searchResult ? (
				<div className='machine_detail__empty_result'>
					<p>No se encontro la máquina con el id especificado</p>
				</div>
			) : (
				<>
					<p>{searchResult.id}</p>
				</>
			)}
		</div>
	);
}

export { MachineDetail };
