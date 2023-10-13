import React from 'react';
import Result from '../../components/Result';
import { CATEGORY_ITEM_TITLE, RESULT_TYPE } from '../../../common/utils';
import { getAllOtherInfoService } from '../../../services/otherInfo/otherInfo.service';
import { useAppDispatch } from '../../../store/hooks';
import { setLoadingState, setPageItemList } from '../../../store/app/slices';

function OtherInfo() {
	const dispatch = useAppDispatch()
	const getAllOtherInfo = async (data: any) => {
		dispatch(setLoadingState(true))
		const result = await getAllOtherInfoService(data);
		if (result.data) {	
			dispatch(setPageItemList(result.data))
		}
		dispatch(setLoadingState(false))
	};
	
	return <Result title={CATEGORY_ITEM_TITLE.OTHER_INFO} getAll={getAllOtherInfo} type={RESULT_TYPE.OTHER_INFO} />;
}

export default OtherInfo;
