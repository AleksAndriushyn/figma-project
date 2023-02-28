import React, { useState } from 'react';
import CustomHeadline from '../custom-components/CustomHeadline';
import '../../styles/post-block/post-block.scss';
import FormBlock from './FormBlock';

const PostBlock = ({ setPage, setIsChanged, positions, isLoading }) => {
	const [result, setResult] = useState(null);

	return (
		<section className='post-block'>
			<CustomHeadline>
				{result?.success
					? 'User successfully registered'
					: 'Working with POST request'}
			</CustomHeadline>
			{result?.success ? (
				<img src='success-image.svg' alt='' />
			) : (
				<FormBlock
					result={result}
					setResult={setResult}
					setPage={setPage}
					setIsChanged={setIsChanged}
					isLoading={isLoading}
					positions={positions}
				/>
			)}
		</section>
	);
};

export default PostBlock;
