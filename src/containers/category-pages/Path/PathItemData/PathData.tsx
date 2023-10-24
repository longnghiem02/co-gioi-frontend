import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../store/hooks';
import { setItemData, setLoadingState } from '../../../../store/app/slices';
import { getPathService } from '../../../../services/path/path.service';
import { selectItemData } from '../../../../store/app/selectors';
import './PathData.scss';

function PathData() {
	const id = useParams().id;
	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(setItemData(null));
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPath = async (data: any) => {
		dispatch(setLoadingState(true));
		const result = await getPathService(data);
		if (result.data) {
			dispatch(setItemData(result.data));
		}
		dispatch(setLoadingState(false));
	};

	useEffect(() => {
		getPath(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const itemData = useSelector(selectItemData);

	return (
		<div className="item-data">
			<div className="data-title">{itemData.name}</div>
		</div>
	);
}

export default PathData;
