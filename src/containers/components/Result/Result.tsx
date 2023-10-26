import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/app/selectors';
import { RESULT_TAB_ID, RESULT_TAB_TITLE } from '../../../common/utils';
import Filter from './Filter';
import Search from './Search';
import './Result.scss';

function Result(props: any) {
	const theme = useSelector(selectTheme)

	const [isFilter, setIsFilter] = useState(true);
	const [isSearch, setIsSearch] = useState(false);

	const handleChangeTab = (id: any) => {
		if (id === RESULT_TAB_ID.FILTER) {
			setIsFilter(true);
			setIsSearch(false);
		}
		if (id === RESULT_TAB_ID.SEARCH) {
			setIsFilter(false);
			setIsSearch(true);
		}
	};

	return (
		<div className={`result ${theme}`}>
			<div className="result-title">{props.title}</div>
			<nav className="result-nav">
				<div
					className={isFilter === false ? 'sub-nav-item' : 'sub-nav-item active'}
					onClick={() => handleChangeTab(RESULT_TAB_ID.FILTER)}
				>
					<div className="sub-nav-title">{RESULT_TAB_TITLE.FILTER}</div>
				</div>
				<div
					className={isSearch === false ? 'sub-nav-item' : 'sub-nav-item active'}
					onClick={() => handleChangeTab(RESULT_TAB_ID.SEARCH)}
				>
					<div className="sub-nav-title">{RESULT_TAB_TITLE.SEARCH}</div>
				</div>
			</nav>
			<div className="result-content">
				{(() => {
					if (isFilter === true) {
						return <Filter getAll={props.getAll} />;
					}
					if (isSearch === true) {
						return <Search search={props.search} />;
					}
				})()}
			</div>
		</div>
	);
}

export default Result;
