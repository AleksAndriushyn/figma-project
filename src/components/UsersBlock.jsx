import { Avatar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import '../styles/users-block.scss';
import CustomButton from './custom-components/CustomButton';
import CustomHeadline from './custom-components/CustomHeadline';
import Spinner from './custom-components/CustomSpinner';
import CustomTooltip from './custom-components/CustomTooltip';

const formatPhoneNumber = (phoneNumber) => {
	phoneNumber = phoneNumber.replace(/\D/g, ''); // remove non-digits
	const regex = /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/;
	const matches = regex.exec(phoneNumber);

	if (matches) {
		return `+${matches[1]} (${matches[2]}) ${matches[3]} ${matches[4]} ${matches[5]}`;
	}

	return phoneNumber;
};

const UsersBlock = ({ users, hasMore, handleShowMore, isLoading }) => {
	return (
		<section className='users-block'>
			<CustomHeadline>Working with GET request</CustomHeadline>
			{isLoading ? (
				<Spinner />
			) : (
				<List>
					{users.map((user) => (
						<ListItem key={user.id}>
							<Avatar className='avatar' src={user.photo} />
							<CustomTooltip title={user.name}>
								<div className='name'>{user.name}</div>
							</CustomTooltip>
							<div className='description'>
								<CustomTooltip title={user.position}>
									<div>{user.position}</div>
								</CustomTooltip>
								<CustomTooltip title={user.email}>
									<div>{user.email}</div>
								</CustomTooltip>
								<CustomTooltip title={user.phone}>
									<div>{formatPhoneNumber(user.phone)}</div>
								</CustomTooltip>
							</div>
						</ListItem>
					))}
				</List>
			)}
			<div>
				{hasMore && (
					<CustomButton onClick={handleShowMore}>Show more</CustomButton>
				)}
			</div>
		</section>
	);
};

export default UsersBlock;
