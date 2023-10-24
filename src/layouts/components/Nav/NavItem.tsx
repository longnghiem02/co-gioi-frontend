import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './Nav.scss';

function NavItem({ data }: any) {
	return (
		<>
			<MediaQuery minWidth={1024}>
				<NavLink to={data.path} className="nav-item">
					<div className="nav-icon">{data.icon}</div>
					<div className="nav-title">{data.title}</div>
				</NavLink>
			</MediaQuery>
			<MediaQuery minWidth={740} maxWidth={1024}>
				<NavLink to={data.path} className="nav-item">
					<div className="nav-icon">{data.icon}</div>
				</NavLink>
			</MediaQuery>
			<MediaQuery maxWidth={740}>
				<NavLink to={data.path} className="nav-item">
					<div className="nav-icon">{data.icon}</div>
				</NavLink>
			</MediaQuery>
		</>
	);
}

export default NavItem;
