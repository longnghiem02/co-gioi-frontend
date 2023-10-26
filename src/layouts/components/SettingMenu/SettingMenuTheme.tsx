import React from 'react';
import { setTheme } from '../../../store/app/slices';
import { useAppDispatch } from '../../../store/hooks';
import './SettingMenu.scss';

function SettingMenuTheme({ data }: any) {
	const dispatch = useAppDispatch();
	const handleChangeTheme = () => {
		dispatch(setTheme(data.key))
	};

	return (
		<div className={`setting-menu-theme ${data.key}`} onClick={() => handleChangeTheme()}>
			{data.title}
		</div>
	);
}

export default SettingMenuTheme;
