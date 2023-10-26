import React from 'react';
import { useSelector } from 'react-redux';
import { MENU_TITLE } from '../../../common/utils';
import { selectTheme } from '../../../store/app/selectors';
import settingMenuItemList from '../../../common/list/settingMenuItemList';
import SettingMenuItem from './SettingMenuItem';
import './SettingMenu.scss';

function SettingMenu() {
	const theme = useSelector(selectTheme)

	return (
		<div className={`setting-menu ${theme}`}>
			<div className="setting-menu-header">
				<div className="setting-menu-title">
          {MENU_TITLE.SETTING}
        </div>
			</div>
			<div className='setting-menu-content'>
        {settingMenuItemList && settingMenuItemList.length > 0 &&
          settingMenuItemList.map((item, index) => {
            return <SettingMenuItem key={index} data={item} />
          })
        }
      </div>
		</div>
	);
}

export default SettingMenu;
