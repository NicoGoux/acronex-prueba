import { useRef } from 'react';
import './HeaderInput.css';
import { useNavigate } from 'react-router-dom';

function HeaderInput({ setQuery }) {
	const navigate = useNavigate();
	const input = useRef();

	const onKeyDown = (event) => {
		if (event.key === 'Enter') {
			navigate('/machines');
			setQuery(event.target.value);
		}
	};

	const onClickSearchIcon = () => {
		navigate('/machines');
		setQuery(input.current.value);
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
