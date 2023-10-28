import React from 'react';
import CategoryItemPage from '..';
import { useAppDispatch } from '../../../../../store/hooks';
import { getAllGuService } from '../../../../../services/gu/gu.service';
import { setLoadingState, setPageItemList } from '../../../../../store/app/slices';
import { CATEGORY_ITEM_PATH, CATEGORY_ITEM_TITLE } from '../../../../../common/utils';

function Gu() {
	const dispatch = useAppDispatch();
	const getAllGu = async (data: any) => {
		dispatch(setLoadingState(true));
		const result = await getAllGuService(data);
		if (result.data) {
			dispatch(setPageItemList(result.data));
		}
		dispatch(setLoadingState(false));
	};

	return (
		<CategoryItemPage title={CATEGORY_ITEM_TITLE.GU} path={CATEGORY_ITEM_PATH.GU} getAll={getAllGu} />
	);
}

export default Gu;
