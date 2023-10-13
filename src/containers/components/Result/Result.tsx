import React, { useState } from 'react';
import All from './All';
import Filter from './Filter';
import Search from './Search';
import { RESULT_TAB_ID, RESULT_TAB_TITLE } from '../../../common/utils';
import './Result.scss';

function Result(props: any) {
	const [isFilter, setIsFilter] = useState(false);
	const [isAll, setIsAll] = useState(true);
	const [isSearch, setIsSearch] = useState(false);

	const handleChangeTab = (id: any) => {
		if (id === RESULT_TAB_ID.FILTER) {
			setIsAll(false);
			setIsFilter(true);
			setIsSearch(false);
		}
		if (id === RESULT_TAB_ID.ALL) {
			setIsAll(true);
			setIsFilter(false);
			setIsSearch(false);
		}
		if (id === RESULT_TAB_ID.SEARCH) {
			setIsAll(false);
			setIsFilter(false);
			setIsSearch(true);
		}
	};

	return (
		<div className="result">
			<div className="result-title">{props.title}</div>
			<nav className="result-nav">
				<div
					className={isFilter === false ? 'sub-nav-item' : 'sub-nav-item active'}
					onClick={() => handleChangeTab(RESULT_TAB_ID.FILTER)}
				>
					<div className="sub-nav-title">{RESULT_TAB_TITLE.FILTER}</div>
				</div>
				<div
					className={isAll === false ? 'sub-nav-item' : 'sub-nav-item active'}
					onClick={() => handleChangeTab(RESULT_TAB_ID.ALL)}
				>
					<div className="sub-nav-title">{RESULT_TAB_TITLE.ALL}</div>
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
						return <Filter />;
					}
					if (isAll === true) {
						return <All getAll={props.getAll} />;
					}
					if (isSearch === true) {
						return <Search />;
					}
				})()}
			</div>
		</div>
	);
}

export default Result;
