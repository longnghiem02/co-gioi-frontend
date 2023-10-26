import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../store/hooks';
import { setManageMenuState, setSettingMenuState } from '../../../store/app/slices';
import { selectManageMenuState, selectSettingMenuState, selectTheme } from '../../../store/app/selectors';
import './Header.scss';
import ManageMenu from '../ManageMenu';
import SettingMenu from '../SettingMenu';

function Header() {
	const theme = useSelector(selectTheme)
	const dispatch = useAppDispatch();
	const handleOpenManageMenu = () => {
		dispatch(setManageMenuState(true));
		dispatch(setSettingMenuState(false));
	};
	const handleCloseManageMenu = () => {
		dispatch(setManageMenuState(false));
	};
	const handleOpenSettingMenu = () => {
		dispatch(setSettingMenuState(true));
		dispatch(setManageMenuState(false));
	};
	const handleCloseSettingMenu = () => {
		dispatch(setSettingMenuState(false));
	};
	const manageMenu = useSelector(selectManageMenuState);
	const settingMenu = useSelector(selectSettingMenuState);

	return (
		<header className={`header ${theme}`}>
			<div className="header-wrapper">
			{manageMenu === true ? <ManageMenu /> : ''}
			{settingMenu === true ? <SettingMenu /> : ''}
				<div className="left-content">
					{manageMenu === true ? (
						<div className="header-btn" onClick={() => handleCloseManageMenu()}>
							<FontAwesomeIcon icon={faXmark} />
						</div>
					) : (
						<div className="header-btn" onClick={() => handleOpenManageMenu()}>
							<FontAwesomeIcon icon={faBars} />
						</div>
					)}
				</div>
				<div className="center-content">Logo</div>
				<div className="right-content">
					{settingMenu === true ? (
						<div className="header-btn" onClick={() => handleCloseSettingMenu()}>
							<FontAwesomeIcon icon={faXmark} />
						</div>
					) : (
						<div className="header-btn" onClick={() => handleOpenSettingMenu()}>
							<FontAwesomeIcon icon={faGear} />
						</div>
					)}
				</div>

			</div>
		</header>
	);
}

export default Header;
