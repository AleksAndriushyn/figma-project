import React, { useState } from 'react';
import { customFetch } from '../../customFetch';
import '../../styles/post-block/form-block.scss';
import CustomButton from '../custom-components/CustomButton';
import InputsBlock from './InputsBlock';
import RadioGroupBlock from './RadioGroupBlock';
import UploadBlock from './UploadBlock';

const FormBlock = ({
	result,
	setResult,
	setPage,
	setIsChanged,
	isLoading,
	positions,
}) => {
	const [data, setData] = useState(null);

	const onSubmit = async (e) => {
		e.preventDefault();
		const { name, email, phone, position, file } = data;

		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('position_id', position?.id);
		formData.append('photo', file);

		const { token } = await customFetch(
			'https://frontend-test-assignment-api.abz.agency/api/v1/token'
		);

		const response = await customFetch(
			'https://frontend-test-assignment-api.abz.agency/api/v1/users',
			{
				body: formData,
				method: 'POST',
				headers: { Token: token },
			}
		);

		setResult(response);
		setPage(1);
		setIsChanged(true);
	};

	return (
		<form className='form-block' onSubmit={onSubmit}>
			<InputsBlock setData={setData} data={data} result={result} />
			<RadioGroupBlock
				position={data?.position}
				onChange={(e) =>
					setData((prevState) => ({
						...prevState,
						position: {
							name: e.target.value,
							id: positions.find((el) => el.name === e.target.value).id,
						},
					}))
				}
				positions={positions}
				isLoading={isLoading}
			/>
			<UploadBlock
				result={result}
				file={data?.file}
				onChange={(e) =>
					setData((prevState) => ({ ...prevState, file: e.target.files[0] }))
				}
			/>
			<div className='sign-up-block'>
				<CustomButton>Sign up</CustomButton>
			</div>
		</form>
	);
};

export default FormBlock;
