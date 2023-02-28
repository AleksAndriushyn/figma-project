import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import '../../styles/post-block/radio-group-block.scss';
import Spinner from '../custom-components/CustomSpinner';

const RadioGroupBlock = ({ position, onChange, positions, isLoading }) => {
	return (
		<div className='radio-group-block'>
			<FormLabel>Select your position</FormLabel>
			<RadioGroup
				className='radio-group'
				value={position?.name ?? ''}
				onChange={onChange}>
				{isLoading ? (
					<Spinner />
				) : (
					positions.map((position) => {
						return (
							<FormControlLabel
								value={position?.name}
								control={<Radio />}
								key={position?.id}
								label={position?.name}
							/>
						);
					})
				)}
			</RadioGroup>
		</div>
	);
};

export default RadioGroupBlock;
