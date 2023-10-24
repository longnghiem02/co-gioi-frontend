import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../../store/hooks';
import { setItemData, setPageItemList } from '../../../../store/app/slices';
import ResultData from '../ResultData';

function Filter(props: any) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(setItemData(null));
			dispatch(setPageItemList(null));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		props.getAll({ take: 10, page: 1 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ResultData getAll={props.getAll} />
		</>
	);
}

export default Filter;
