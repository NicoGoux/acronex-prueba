// import React from 'react';

import { HeaderLogo } from './headerLogo/HeaderLogo';
import { HeaderUser } from './headerUser/HeaderUser';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<HeaderLogo />
			<div className='header__input_container'>
				<input
					type='text'
					placeholder='Buscar máquina'
					className='input header__input'
				/>
				<span className='header__input__search_icon' />
			</div>
			<HeaderUser />
		</header>
	);
}

export { Header };
