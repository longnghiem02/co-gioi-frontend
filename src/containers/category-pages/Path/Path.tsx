import React from 'react';
import Result from '../../components/Result';
import { CATEGORY_ITEM_TITLE, RESULT_TYPE } from '../../../common/utils';
import { getAllPathService, searchPathService } from '../../../services/path/path.service';
import { useAppDispatch } from '../../../store/hooks';
import { setLoadingState, setPageItemList } from '../../../store/app/slices';

function Path() {
	const dispatch = useAppDispatch()
	const getAllPath = async (data: any) => {
		dispatch(setLoadingState(true))
		const result = await getAllPathService(data);
		if (result.data) {	
			dispatch(setPageItemList(result.data))
		}
		dispatch(setLoadingState(false))
	};

	const searchPath = async (data: any) => {
		dispatch(setLoadingState(true))
		const result = await searchPathService(data);
		if (result.data) {
			dispatch(setPageItemList(result.data));
		}
		dispatch(setLoadingState(false))
	};

	return <Result title={CATEGORY_ITEM_TITLE.PATH} getAll={getAllPath} search={searchPath} type={RESULT_TYPE.PATH} />;
}

export default Path;
