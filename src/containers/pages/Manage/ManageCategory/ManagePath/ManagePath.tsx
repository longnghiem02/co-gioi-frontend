import React from 'react';
import { MANAGE_PAGE_TITLE } from '../../../../../common/utils';
import ManageContent from '../..';
import { useAppDispatch } from '../../../../../store/hooks';
import { getAllPathService } from '../../../../../services/path/path.service';
import { setLoadingState, setPageItemList } from '../../../../../store/app/slices';
import '../../Manage.scss';

function ManagePath() {
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
		<div className="manage">
			<div className="manage-title">{MANAGE_PAGE_TITLE.PATH}</div>
			<ManageContent getAll={getAllPath} />
			{/* <div className="manage-form">
				<div className="input-section">
					<label>Tên:</label>
					<input type="text" />
				</div>
				<div className="input-section-area">
					<label>Thông tin chi tiết:</label>
					<textarea></textarea>
				</div>
			</div>
			<div className="manage-option">
				<div className="manage-btn save">Add</div>
				<div className="manage-btn cancel">Cancel</div>
			</div> */}
		</div>
	);
}

export default ManagePath;
