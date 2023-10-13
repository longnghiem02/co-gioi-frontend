import React from 'react';
import { MANAGE_PAGE_TITLE } from '../../../common/utils';
import Manage from '../../components/Manage';
import { useAppDispatch } from '../../../store/hooks';
import { getAllPathService, searchPathService } from '../../../services/path/path.service';
import { setLoadingState, setPageItemList } from '../../../store/app/slices';

function ManagePath() {
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
		const result = await searchPathService(data);
		if (result.data) {	
			dispatch(setPageItemList(result.data))
		}
	};

	return (
    <div>
      <Manage title={MANAGE_PAGE_TITLE.PATH} getAll={getAllPath} search={searchPath} />
    </div>
  )
}

export default ManagePath;
