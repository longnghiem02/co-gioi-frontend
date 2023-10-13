import React from 'react';
import manageMenuItemList from '../../../common/list/manageMenuItemList';
import { MENU_TITLE } from '../../../common/utils';
import ManageMenuItem from './ManageMenuItem';
import './ManageMenu.scss';

function ManageMenu() {

	return (
		<div className="manage-menu">
			<div className="manage-menu-header">
				<div className="manage-menu-title">
          {MENU_TITLE.MANAGE}
        </div>
			</div>
      <div className='manage-menu-content'>
        {manageMenuItemList && manageMenuItemList.length > 0 &&
          manageMenuItemList.map((item, index) => {
            return <ManageMenuItem key={index} data={item} />
          })
        }
      </div>
		</div>
	);
}

export default ManageMenu;
