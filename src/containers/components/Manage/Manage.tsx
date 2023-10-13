import React from 'react';
import ManageTable from './ManageTable';
import ManageOption from './ManageOption';
import './Manage.scss';

function Manage(props: any) {
	return (
		<div className="manage">
			<div className="manage-title">{props.title}</div>
			<div className="manage-content">
        <ManageOption getAll={props.getAll} search={props.search} />
        <ManageTable />
			</div>
		</div>
	);
}

export default Manage;
