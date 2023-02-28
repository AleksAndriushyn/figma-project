import React, { useState } from 'react';
import '../../styles/custom-styles/text-field.scss';
const CustomTextField = ({
	errorType,
	value,
	onChange,
	label,
	helperText,
	error,
}) => {
	const [focus, setFocus] = useState(false);

	return (
		<div
			className={`form-input ${focus ? 'focused' : ''} ${
				errorType || error ? 'error' : ''
			}`}>
			<label>{label}</label>
			<input
				onFocus={() => setFocus(true)}
				onBlur={() => !value && setFocus(false)}
				value={value ?? ''}
				onChange={onChange}
			/>
			{helperText && <span>{helperText}</span>}
		</div>
	);
};

export default CustomTextField;
