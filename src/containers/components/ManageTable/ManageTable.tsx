import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { selectPageItemListData, selectTheme } from '../../../store/app/selectors';
import './ManageTable.scss';

function ManageTable(props: any) {
	const theme = useSelector(selectTheme);

	useEffect(() => {
		props.getAll({ take: 10, page: 1 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const pageItemListData = useSelector(selectPageItemListData);

	return (
		<div className={`manage-table ${theme}`}>
			<div className="table">
				<div className="table-head">
					<div className="table-row">
						<div className="name-column">Name</div>
						<div className="view-column">View</div>
					</div>
				</div>
				<div className="table-body">
					{(() => {
						if (pageItemListData && pageItemListData.length > 0) {
							return pageItemListData.map((item, index) => {
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
							});
						} else {
							return (
								<div className="table-row">
									<div className="no-column">Không có dữ liệu</div>
								</div>
							);
						}
					})()}
				</div>
			</div>
		</div>
	);
}

export default ManageTable;
