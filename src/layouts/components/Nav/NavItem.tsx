import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { selectTheme } from '../../../store/app/selectors';
import { useAppDispatch } from '../../../store/hooks';
import { setManageMenuState, setSettingMenuState } from '../../../store/app/slices';
import './Nav.scss';

function NavItem({ data }: any) {
	const theme = useSelector(selectTheme)
	const dispatch = useAppDispatch()

	const handleCloseMenu = () => {
		dispatch(setManageMenuState(false))
		dispatch(setSettingMenuState(false))
	}

	return (
		<>
			<NavLink to={data.path} className={`nav-item ${theme}`} onClick={() => handleCloseMenu()}>
				<MediaQuery minWidth={1024}>
					<div className="nav-icon">{data.icon}</div>
					<div className="nav-title">{data.title}</div>
				</MediaQuery>
				<MediaQuery minWidth={740} maxWidth={1024}>
					<div className="nav-icon">{data.icon}</div>
				</MediaQuery>
				<MediaQuery maxWidth={740}>
					<div className="nav-icon">{data.icon}</div>
				</MediaQuery>
			</NavLink>
		</>
	);
}

export default NavItem;
