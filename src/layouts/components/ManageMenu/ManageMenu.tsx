import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/app/selectors';
import manageMenuItemList from '../../../common/list/manageMenuItemList';
import { MENU_TITLE } from '../../../common/utils';
import ManageMenuItem from './ManageMenuItem';
import './ManageMenu.scss';

function ManageMenu() {
	const theme = useSelector(selectTheme);

	return (
		<div className={`manage-menu ${theme}`}>
			<div className="manage-menu-header">
				<div className="manage-menu-title">{MENU_TITLE.MANAGE}</div>
			</div>
			<div className="manage-menu-content">
				{manageMenuItemList &&
					manageMenuItemList.length > 0 &&
					manageMenuItemList.map((item, index) => {
						return <ManageMenuItem key={index} data={item} />;
					})}
			</div>
		</div>
	);
}

export default ManageMenu;
