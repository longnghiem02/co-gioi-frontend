import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectPageItemListData } from '../../../../store/app/selectors';
import Item from './Item';
import './CategoryItemPage.scss';

function ItemList(props: any) {
	const pageItemListData = useSelector(selectPageItemListData);

	useEffect(() => {
		props.getAll({ page: 1, limit: 10 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="item-list">
			{(() => {
				if (pageItemListData && pageItemListData.length > 0) {
					return pageItemListData.map((item, index) => {
						return <Item key={index} path={props.path} data={item} />;
					});
				} else {
					return <div></div>;
				}
			})()}
		</div>
	);
}

export default ItemList;
