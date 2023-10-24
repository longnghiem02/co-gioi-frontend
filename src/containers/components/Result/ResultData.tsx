import React from 'react';
import { useSelector } from 'react-redux';
import { selectPageItemListData } from '../../../store/app/selectors';
import ResultItem from './ResultItem';
import Paginate from '../Paginate';
import './Result.scss';

function ResultData(props: any) {
	const pageItemListData = useSelector(selectPageItemListData);

	return (
		<>
			{(() => {
				if (pageItemListData && pageItemListData.length > 0) {
					return (
						<>
							<div className="result-data">
								{pageItemListData &&
									pageItemListData.length > 0 &&
									pageItemListData.map((item, index) => {
										return <ResultItem key={index} data={item} />;
									})}
							</div>
							<Paginate getAll={props.getAll} search={props.search} />
						</>
					);
				} else {
					return (
						<div className="result-no-data">
							<div className="title">No data</div>
						</div>
					);
				}
			})()}
		</>
	);
}

export default ResultData;
