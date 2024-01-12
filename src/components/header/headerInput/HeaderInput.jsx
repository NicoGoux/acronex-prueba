import { useRef } from 'react';
import './HeaderInput.css';
import { useNavigate } from 'react-router-dom';

function HeaderInput() {
	const navigate = useNavigate();
	const input = useRef();

	const onKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.target.value != ''
				? navigate(`/machines?q=${event.target.value}`)
				: navigate(`/machines`);
		}
	};

	const onClickSearchIcon = () => {
		input.current.value != ''
			? navigate(`/machines?q=${input.current.value}`)
			: navigate(`/machines`);
	};

	return (
		<div className='header__input_container'>
			<input
				ref={input}
				type='text'
				placeholder='Buscar máquina'
				className='input header__input'
				onKeyDown={onKeyDown}
			/>
			<span onClick={onClickSearchIcon} className='header__input__search_icon' />
		</div>
	);
}

export { HeaderInput };
