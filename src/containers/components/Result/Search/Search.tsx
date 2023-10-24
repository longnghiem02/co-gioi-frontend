import React, { useEffect, useState } from 'react';
import ResultData from '../ResultData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../../store/hooks';
import { setItemData, setPageItemList, setSearchValue } from '../../../../store/app/slices';
import './Search.scss'

function Search(props: any) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(setSearchValue(''));
			dispatch(setItemData(null));
			dispatch(setPageItemList(null));
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

	return (
		<>
			<div className="item-search">
				<input type="text" placeholder="Search" value={inputValue} onChange={(e) => handleChangeInputValue(e)} />
				<div className="search-btn" onClick={() => handleSearch()}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
			</div>
			<ResultData search={props.search} />
		</>
	);
}

export default Search;
