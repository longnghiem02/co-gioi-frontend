import React from 'react';
import SettingMenuTheme from './SettingMenuTheme';
import { setSettingMenuState } from '../../../store/app/slices';
import { SETTING_TYPE } from '../../../common/utils';
import { useAppDispatch } from '../../../store/hooks';
import './SettingMenu.scss';

function SettingMenuItem({ data }: any) {
	const dispatch = useAppDispatch();
	const handleCloseSettingMenu = () => dispatch(setSettingMenuState(false));

	return (
		<>
			{(() => {
				if (data.child && data.child.length > 0) {
					return (
						<>
							<div className="setting-menu-item">
								<div>{data.title}</div>
							</div>
							<div className="setting-menu-child">
								{data.type === SETTING_TYPE.THEME ? data.child.map((item: any, index: any) => {
									return <SettingMenuTheme key={index} data={item} />;
								}) : ''}
							</div>
						</>
					);
				} else {
					return (
						<div className="setting-menu-item" onClick={() => handleCloseSettingMenu()}>
							<div>{data.title}</div>
						</div>
					);
				}
			})()}
		</>
	);
}

export default SettingMenuItem;
