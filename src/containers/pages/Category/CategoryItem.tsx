import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/app/selectors';
import './Category.scss';

function CategoryItem({ data }: any) {
	const theme = useSelector(selectTheme)

	return (
		<div className={`category-item ${theme}`}>
			<Link to={data.path}>
				<img src={data.icon} alt="" />
				<span>{data.title}</span>
			</Link>
		</div>
	);
}

export default CategoryItem;
