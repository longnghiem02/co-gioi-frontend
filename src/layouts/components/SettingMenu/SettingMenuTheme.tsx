import React from 'react';
import { useSelector } from 'react-redux';
import { setTheme } from '../../../store/app/slices';
import { useAppDispatch } from '../../../store/hooks';
import { selectTheme } from '../../../store/app/selectors';
import './SettingMenu.scss';

function SettingMenuTheme({ data }: any) {
	const theme = useSelector(selectTheme);

	const dispatch = useAppDispatch();
	const handleChangeTheme = () => {
		dispatch(setTheme(data.key))
	};

	return (
		<div className={`setting-menu-theme ${data.key === theme ? 'active' : ''}`} onClick={() => handleChangeTheme()}>
			<span>{data.title}</span>
		</div>
	);
}

export default SettingMenuTheme;
