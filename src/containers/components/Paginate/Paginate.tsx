import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { selectPageItemListMeta, selectSearchValue, selectTheme } from '../../../store/app/selectors';
import './Paginate.scss';

function Paginate(props: any) {
	const theme = useSelector(selectTheme);
	const pageItemListMeta = useSelector(selectPageItemListMeta);
	const searchValue = useSelector(selectSearchValue);

	const handleChangePage = (e: any) => {
		const newPage = e.selected + 1;
			props.getAll({ page: newPage, limit: 10, search: searchValue });
	};

	return (
		<div className={`paginate ${theme}`}>
			{pageItemListMeta.totalPages > 1 ? (
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					onPageChange={(e) => handleChangePage(e)}
					pageRangeDisplayed={1}
					marginPagesDisplayed={1}
					forcePage={pageItemListMeta.currentPage - 1}
					pageCount={pageItemListMeta.totalPages}
					previousLabel="<"
					renderOnZeroPageCount={null}
				/>
			) : (
				''
			)}
		</div>
	);
}

export default Paginate;
