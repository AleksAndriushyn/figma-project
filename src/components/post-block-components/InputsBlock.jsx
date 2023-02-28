import React from 'react';
import '../../styles/post-block/inputs-block.scss';
import CustomTextField from '../custom-components/CustomTextField';

const InputsBlock = ({ result, data, setData }) => {
	const error = result?.success === false && !result?.fails;

	const showErrorMessage = (errorType) => {
		if (errorType) {
			return errorType;
		}

		if (error) {
			return result.message;
		}

		return;
	};

	return (
		<div className={'inputs-block'}>
			<CustomTextField
				label='Your name'
				errorType={result?.fails?.name}
				helperText={result?.fails?.name}
				value={data?.name}
				onChange={(e) =>
					setData((prevState) => ({ ...prevState, name: e.target.value }))
				}
			/>
			<CustomTextField
				label='Email'
				errorType={result?.fails?.email}
				helperText={showErrorMessage(result?.fails?.email)}
				value={data?.email}
				onChange={(e) =>
					setData((prevState) => ({ ...prevState, email: e.target.value }))
				}
				error={error}
			/>
			<CustomTextField
				label='Phone'
				errorType={result?.fails?.phone}
				helperText={
					showErrorMessage(result?.fails?.phone) ?? '+38 (XXX) XXX - XX - XX'
				}
				value={data?.phone}
				onChange={(e) =>
					setData((prevState) => ({ ...prevState, phone: e.target.value }))
				}
				error={error}
			/>
		</div>
	);
};

export default InputsBlock;
