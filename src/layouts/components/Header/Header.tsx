import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear, faXmark } from '@fortawesome/free-solid-svg-icons';

import ManageMenu from '../ManageMenu';
import './Header.scss';
import { useAppDispatch } from '../../../store/hooks';
import { setManageMenuState } from '../../../store/app/slices';
import { selectManageMenuState } from '../../../store/app/selectors';

function Header() {
	const dispatch = useAppDispatch();
	const handleOpenManageMenu = () => dispatch(setManageMenuState(true));
	const handleCloseManageMenu = () => dispatch(setManageMenuState(false));
	const manageMenu = useSelector(selectManageMenuState);

	return (
		<header className="header">
			<div className="header-wrapper">
				{manageMenu === true ? <ManageMenu /> : ''}
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
					<div className="header-btn">
						<FontAwesomeIcon icon={faGear} />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
