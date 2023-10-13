import React from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';

function CategoryItem({ data }: any) {
	return (
		<div className="category-item">
			<Link to={data.path}>
				<img src={data.icon} alt="" />
				{data.title}
			</Link>
		</div>
	);
}

export default CategoryItem;
