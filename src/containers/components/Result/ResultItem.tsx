import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_ITEM_PATH } from '../../../common/utils';
import './Result.scss';

function Item(props: any) {
	return (
		<Link to={CATEGORY_ITEM_PATH.PATH + '/' + props.data.id} className="result-item">
			{props.data.name}
		</Link>
	);
}

export default Item;
