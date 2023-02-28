import React from 'react';
import '../styles/header.scss';
import CustomButton from './custom-components/CustomButton';

const Header = () => {
	return (
		<header className='header-container'>
			<div className='header'>
				<img src='Logo.svg' alt='' />
				<div className='button-group'>
					<CustomButton>Users</CustomButton>
					<CustomButton>Sign up</CustomButton>
				</div>
			</div>
		</header>
	);
};

export default Header;
