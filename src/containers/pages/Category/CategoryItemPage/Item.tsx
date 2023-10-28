import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../../store/app/selectors';
import './CategoryItemPage.scss';

function Item(props: any) {
	const theme = useSelector(selectTheme);

	return (
		<Link to={props.path + '/' + props.data.id} className={`item ${theme}`}>
			<span>{props.data.name}</span>
		</Link>
	);
}

export default Item;
