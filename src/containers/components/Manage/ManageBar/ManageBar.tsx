import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../../store/hooks';
import { setSearchValue } from '../../../../store/app/slices';
import './ManageBar.scss';

function ManageBar(props: any) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(setSearchValue(''));
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [inputValue, setInputValue] = useState('');
	const handleChangeInputValue = (e: any) => {
		setInputValue(e.target.value);
	};

	const handleSearch = async () => {
		dispatch(setSearchValue(inputValue));
		await props.search({ take: 10, page: 1, name: inputValue });
	};

	const handleRefresh = () => {
		setInputValue('');
		dispatch(setSearchValue(''));
		props.getAll({ take: 10, page: 1 });
	};

	return (
		<div className="manage-bar">
			<div className="manage-search">
				<input type="text" placeholder="Search" value={inputValue} onChange={(e) => handleChangeInputValue(e)} />
				<div className="search-btn" onClick={() => handleSearch()}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
			</div>
			<div className="manage-btn">Add</div>
			<div
				className="manage-btn"
				onClick={() => {
					handleRefresh();
				}}
			>
				Refresh
			</div>
		</div>
	);
}

export default ManageBar;
