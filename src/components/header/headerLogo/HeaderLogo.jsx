import { useNavigate } from 'react-router-dom';
import './HeaderLogo.css';

function HeaderLogo() {
	const navigate = useNavigate();
	const onClickLogoContainer = () => {
		navigate('/machines');
	};
	return (
		<div onClick={onClickLogoContainer} className='header__logo_container'>
			<figure className='header__logo'>
				<img src='/logo35x35.png' alt='Logo unimap' />
			</figure>

			<figure className='header__title'>
				<img src='/unimap_blanco.svg' alt='Unimap' />
			</figure>
		</div>
	);
}

export { HeaderLogo };
