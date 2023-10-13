import React from 'react';
import { Link } from 'react-router-dom';
import './ManageMenu.scss';
import { setManageMenuState } from '../../../store/app/slices';
import { useAppDispatch } from '../../../store/hooks';

function ManageMenuChildItem({ data }: any) {
	const dispatch = useAppDispatch();
	const handleCloseManageMenu = () => dispatch(setManageMenuState(false));

	return (
		<>
			<Link to={data.path} className="manage-menu-child-item" onClick={() => handleCloseManageMenu()}>
				<div>{data.title}</div>
			</Link>
		</>
	);
}

export default ManageMenuChildItem;
