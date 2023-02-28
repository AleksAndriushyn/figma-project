import { Tooltip } from '@mui/material';
import React from 'react';

const CustomTooltip = ({children, title}) => {
	return (
		<Tooltip title={title} placement='bottom'>
			{children}
		</Tooltip>
	);
};

export default CustomTooltip;
