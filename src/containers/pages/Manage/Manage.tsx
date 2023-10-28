import React from 'react';
import ManageTable from '../../components/ManageTable';
import ManageBar from '../../components/ManageBar';
import './Manage.scss';
import Paginate from '../../components/Paginate';

function ManageContent(props: any) {
	return (
		<div className="manage-content">
			<ManageBar getAll={props.getAll} />
			<ManageTable getAll={props.getAll} />
			<Paginate getAll={props.getAll} />
		</div>
	);
}

export default ManageContent;
