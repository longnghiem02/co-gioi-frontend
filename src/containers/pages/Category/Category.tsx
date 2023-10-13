import React from 'react';
import CategoryItem from './CategoryItem';
import categoryItemList from '../../../common/list/categoryItemList';
import './Category.scss';

function Category() {
	return (
		<>
			<div className="category">
				{categoryItemList &&
					categoryItemList.length > 0 &&
					categoryItemList.map((item, index) => {
						return <CategoryItem data={item} key={index} />;
					})}
			</div>
		</>
	);
}

export default Category;
