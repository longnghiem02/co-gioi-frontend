import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ManageMenuChildItem from './ManageMenuChildItem';
import './ManageMenu.scss';
import { setManageMenuState } from '../../../store/app/slices';
import { useAppDispatch } from '../../../store/hooks';

function ManageMenuItem({ data }: any) {
	const dispatch = useAppDispatch();
	const handleCloseManageMenu = () => dispatch(setManageMenuState(false));
	const [showChildItem, setShowChildItem] = useState(false);
	const handleShowChildItem = () => {
		setShowChildItem(!showChildItem);
	};

	return (
		<>
			{(() => {
				if (data.child && data.child.length > 0) {
					return (
						<>
							<div className="manage-menu-item" onClick={() => handleShowChildItem()}>
								<div>
									{data.title}
									&nbsp;
									{showChildItem === true ? (
										<FontAwesomeIcon icon={faChevronUp} />
									) : (
										<FontAwesomeIcon icon={faChevronDown} />
									)}
								</div>
							</div>
							{showChildItem === true
								? data.child.map((item: any, index: any) => {
										return <ManageMenuChildItem key={index} data={item} />;
								  })
								: ''}
						</>
					);
				} else {
					return (
						<Link to={data.path} className="manage-menu-item" onClick={() => handleCloseManageMenu()}>
							<div>{data.title}</div>
						</Link>
					);
				}
			})()}
		</>
	);
}

export default ManageMenuItem;
