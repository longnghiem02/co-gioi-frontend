import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

function NavItem({data}: any) {
	
	return (
		<>
			<NavLink to={data.path} className="nav-item">
				<div className='nav-icon'>
					{data.icon}
				</div>
				<div className='nav-title'>
					{data.title}
				</div>
			</NavLink>
		</>
	);
}

export default NavItem;