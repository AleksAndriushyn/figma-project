import React from 'react';
import '../styles/image-block.scss';
import CustomButton from './custom-components/CustomButton';

const ImageBlock = () => {
	return (
		<section className='container'>
			<div className='centered'>
				<div className='text'>
					<div className='text-headline'>
						Test assignment for front-end developer
					</div>
					<div className='text-description'>
						What defines a good front-end developer is one that has skilled
						knowledge of HTML, CSS, JS with a vast understanding of User design
						thinking as they'll be building web interfaces with accessibility in
						mind. They should also be excited to learn, as the world of
						Front-End Development keeps evolving.
					</div>
				</div>
				<CustomButton>Sign up</CustomButton>
			</div>
		</section>
	);
};

export default ImageBlock;
