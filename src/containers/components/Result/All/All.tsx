import React, { useEffect } from 'react';
// import './Novel.scss'

function All(props: any) {
	useEffect(() => {
		props.getAll({take: 5, page: 1})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className="account">
			All page
		</div>
	);
}

export default All;
