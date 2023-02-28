import React, { useRef } from 'react';
import '../../styles/post-block/upload-block.scss';

const UploadBlock = ({ result, file, onChange }) => {
	const inputFile = useRef(null);
	return (
		<div
			className={`upload-block ${result?.fails?.photo ? 'error' : ''}`}
			onClick={() => inputFile.current.click()}>
			<label>Upload</label>
			<input
				className={`${file ? 'selected' : ''}`}
				placeholder={file ? file.name : 'Upload your photo'}
			/>
			<input
				hidden
				ref={inputFile}
				onChange={onChange}
				accept='image/*'
				type='file'
			/>
			{result?.fails?.photo && <span>{result?.fails?.photo}</span>}
		</div>
	);
};

export default UploadBlock;
