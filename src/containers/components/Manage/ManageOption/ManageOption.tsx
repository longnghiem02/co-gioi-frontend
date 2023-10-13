import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './ManageOption.scss';

function ManageOption(props: any) {
	useEffect(() => {
		props.getAll({ take: 10, page: 1 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [searchValue, setSearchValue] = useState('');
	const handleChangeSearchValue = (e: any) => {
		setSearchValue(e.target.value);
	};

	const handleSearch = async () => {
		await props.search({ take: 10, page: 1, name: searchValue });
	};

	const handleRefresh = () => {
		setSearchValue('');
		props.getAll({ take: 10, page: 1 });
	};

	return (
		<div className="manage-option">
			<div className="manage-search">
				<input type="text" placeholder="Search" value={searchValue} onChange={(e) => handleChangeSearchValue(e)} />
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

export default ManageOption;
