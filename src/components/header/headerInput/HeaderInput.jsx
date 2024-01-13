import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderInput.css';

function HeaderInput() {
	const [searched, setSearched] = useState(false);
	const navigate = useNavigate();
	const input = useRef();

	const onKeyDown = (event) => {
		if (searched) {
			setSearched(false);
		}
		if (event.key === 'Enter') {
			event.target.value != ''
				? navigate(`/machines?q=${event.target.value}`)
				: navigate(`/machines`);
			setSearched(true);
		}
	};

	const onClickSearchIcon = () => {
		input.current.value != ''
			? navigate(`/machines?q=${input.current.value}`)
			: navigate(`/machines`);
		setSearched(true);
	};

	return (
		<div className='header__input_container'>
			<input
				ref={input}
				type='text'
				placeholder='Buscar máquina'
				className={`input header__input ${searched && 'header__input--searched'}`}
				onKeyDown={onKeyDown}
			/>
			<span onClick={onClickSearchIcon} className='header__input__search_icon' />
		</div>
	);
}

export { HeaderInput };
