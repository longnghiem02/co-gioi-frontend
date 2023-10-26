import React from 'react';
import { useSelector } from 'react-redux';
import { navItemLeft, navItemRight } from '../../../common/list';
import { selectTheme } from '../../../store/app/selectors';
import NavItem from './NavItem';
import Loading from '../Loading/Loading';
import './Nav.scss';

function Nav() {
	const theme = useSelector(selectTheme)
	
	return (
		<nav className={`nav ${theme}`}>
			<div className="nav-wrapper">
				<div className="nav-left">
					{navItemLeft &&
						navItemLeft.length > 0 &&
						navItemLeft.map((item, index) => {
							return <NavItem key={index} data={item} />;
						})}
				</div>
				<Loading />
				<div className="nav-right">
					{navItemRight &&
						navItemRight.length > 0 &&
						navItemRight.map((item, index) => {
							return <NavItem key={index} data={item} />;
						})}
				</div>
			</div>
		</nav>
	);
}

export default Nav;
