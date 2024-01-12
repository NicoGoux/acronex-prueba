// import React from 'react';

import { HeaderLogo } from './headerLogo/HeaderLogo';
import { HeaderUser } from './headerUser/HeaderUser';
import { HeaderInput } from './headerInput/HeaderInput';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<HeaderLogo />
			<HeaderInput />
			<HeaderUser />
		</header>
	);
}

export { Header };
