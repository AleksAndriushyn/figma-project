import React from 'react';
import '../../styles/custom-styles/button.scss';

const CustomButton = ({ children, onClick }) => {
	return (
		<button onClick={onClick} type='submit'>
			{children}
		</button>
	);
};

export default CustomButton;
