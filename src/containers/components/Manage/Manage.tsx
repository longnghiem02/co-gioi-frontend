import React from 'react';
import ManageTable from './ManageTable';
import ManageBar from './ManageBar';
import './Manage.scss';
import Paginate from '../Paginate';

function ManageContent(props: any) {
	return (

			<div className="manage-content">
        <ManageBar getAll={props.getAll} search={props.search} />
        <ManageTable getAll={props.getAll} />
				<Paginate getAll={props.getAll} search={props.search} />
			</div>
	);
}

export default ManageContent;
