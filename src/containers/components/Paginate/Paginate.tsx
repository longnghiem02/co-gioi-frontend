import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { selectPageItemListMeta, selectSearchValue, selectTheme } from '../../../store/app/selectors';
import './Paginate.scss';

function Paginate(props: any) {
	const theme = useSelector(selectTheme)
	const pageItemListMeta = useSelector(selectPageItemListMeta);
	const searchValue = useSelector(selectSearchValue);

	const handleChangePage = (e: any) => {
		const newPage = e.selected + 1;
		if (searchValue === '') {
			props.getAll({ take: 10, page: newPage });
		} else {
			props.search({ take: 10, page: newPage, name: searchValue });
		}
	};

	return (
		<div className={`paginate ${theme}`}>
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={(e) => handleChangePage(e)}
				pageRangeDisplayed={3}
				marginPagesDisplayed={1}
				forcePage={pageItemListMeta.currentPage - 1}
				pageCount={pageItemListMeta.totalPage}
				previousLabel="<"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
}

export default Paginate;
