import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { selectPageItemList } from '../../../../store/app/selectors';
import './ManageTable.scss';

function ManageTable(props: any) {
	const pageItemList = useSelector(selectPageItemList);

	return (
		<div className="manage-table">
			<div className="table">
				<div className="table-head">
					<div className="table-row">
						<div className="name-column">Name</div>
						<div className="view-column">View</div>
					</div>
				</div>
				<div className="table-body">
					{pageItemList &&
						pageItemList.data &&
						pageItemList.data.length > 0 &&
						pageItemList.data.map((item: {name: string}, index: any) => {
							return (
								<div className="table-row" key={index}>
									<div className="name-column">{item.name}</div>
									<div className="view-column">
										<div className="view-btn">
											<FontAwesomeIcon icon={faEye} />
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default ManageTable;
