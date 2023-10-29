import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../store/hooks';
import { setFilter } from '../../../store/app/slices';
import { selectTheme } from '../../../store/app/selectors';
import './ManageBar.scss';

function ManageBar(props: any) {
	const theme = useSelector(selectTheme);

	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(setFilter({ search: '' }));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [inputValue, setInputValue] = useState('');
	const handleChangeInputValue = (e: any) => {
		setInputValue(e.target.value);
	};

	const handleSearch = async () => {
		dispatch(setFilter({ search: inputValue }));
		await props.getAll({ take: 10, page: 1, name: inputValue });
	};

	const handleRefresh = () => {
		setInputValue('');
		dispatch(setFilter({ search: '' }));
		props.getAll({ take: 10, page: 1 });
	};

	return (
		<div className={`manage-bar ${theme}`}>
			<div className={`item-search ${theme}`}>
				<input type="text" placeholder="Tìm kiếm" value={inputValue} onChange={(e) => handleChangeInputValue(e)} />
				<div className="search-btn" onClick={() => handleSearch()}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
			</div>
			<div className="manage-btn-wrapper">
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
		</div>
	);
}

export default ManageBar;
