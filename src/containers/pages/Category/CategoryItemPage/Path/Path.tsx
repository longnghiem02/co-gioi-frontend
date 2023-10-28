import React from 'react';
import CategoryItemPage from '..';
import { CATEGORY_ITEM_PATH, CATEGORY_ITEM_TITLE } from '../../../../../common/utils';
import { getAllPathService } from '../../../../../services/path/path.service';
import { useAppDispatch } from '../../../../../store/hooks';
import { setLoadingState, setPageItemList } from '../../../../../store/app/slices';

function Path() {
	const dispatch = useAppDispatch();
	const getAllPath = async (data: any) => {
		dispatch(setLoadingState(true));
		const result = await getAllPathService(data);
		if (result.data) {
			dispatch(setPageItemList(result.data));
		}
		dispatch(setLoadingState(false));
	};

	return (
		<CategoryItemPage
			title={CATEGORY_ITEM_TITLE.PATH}
			path={CATEGORY_ITEM_PATH.PATH}
			getAll={getAllPath}
		/>
	);
}

export default Path;
