import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/app/selectors';
import { CATEGORY_ITEM_PATH } from '../../../common/utils';
import './Result.scss';

function Item(props: any) {
	const theme = useSelector(selectTheme)

	return (
		<Link to={CATEGORY_ITEM_PATH.PATH + '/' + props.data.id} className={`result-item ${theme}`}>
			{props.data.name}
		</Link>
	);
}

export default Item;
