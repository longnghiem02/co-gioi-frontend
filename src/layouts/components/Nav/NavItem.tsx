import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { selectTheme } from '../../../store/app/selectors';
import './Nav.scss';

function NavItem({ data }: any) {
	const theme = useSelector(selectTheme)

	return (
		<>
			<NavLink to={data.path} className={`nav-item ${theme}`}>
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
