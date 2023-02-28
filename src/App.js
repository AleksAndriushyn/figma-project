import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ImageBlock from './components/ImageBlock';
import PostBlock from './components/post-block-components/PostBlock';
import UsersBlock from './components/UsersBlock';
import { customFetch } from './customFetch';

const App = () => {
	const [users, setUsers] = useState([]);
	const [positions, setPositions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isChanged, setIsChanged] = useState(false);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	const fetchData = useCallback(async () => {
		const [usersData, positionsData] = await Promise.all([
			customFetch(
				`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
			),
			customFetch(
				'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
			),
		]);
		return { usersData, positionsData };
	}, [page]);

	const sortUsers = (usersData) => {
		if (!usersData?.users.length) {
			setHasMore(false);
		} else {
			const sortedUsers = usersData?.users.sort((a, b) =>
				b.registration_timestamp > a.registration_timestamp ? 1 : -1
			);
			setUsers(sortedUsers);
		}
	};

	const loadData = useCallback(async () => {
		setIsLoading(true);

		const { usersData, positionsData } = await fetchData();
		sortUsers(usersData);
		setPositions(positionsData.positions);
		setIsChanged(false);
		setIsLoading(false);
	}, [fetchData]);

	useEffect(() => {
		loadData();
	}, [isChanged, loadData]);

	const handleShowMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<main className='app'>
			<Header />
			<div className='content'>
				<ImageBlock />
				<UsersBlock
					hasMore={hasMore}
					isLoading={isLoading}
					users={users}
					handleShowMore={handleShowMore}
				/>
				<PostBlock
					positions={positions}
					setPage={setPage}
					setIsChanged={setIsChanged}
					isLoading={isLoading}
				/>
			</div>
		</main>
	);
};

export default App;

