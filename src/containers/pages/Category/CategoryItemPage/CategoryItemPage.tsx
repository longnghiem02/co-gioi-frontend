import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../../store/app/selectors';
import Filter from '../../../components/Filter';
import ItemList from './ItemList';
import './CategoryItemPage.scss';
import Paginate from '../../../components/Paginate';

function CategoryItemPage(props: any) {
	const theme = useSelector(selectTheme);

	return (
		<div className={`category-item-page ${theme}`}>
			<div className="category-item-page-title">{props.title}</div>
			<div className="category-item-page-content">
				<Filter getAll={props.getAll} />
				<ItemList path={props.path} getAll={props.getAll} />
				<Paginate getAll={props.getAll} />
			</div>
		</div>
	);
}

export default CategoryItemPage;
