import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoadingState, selectTheme } from '../../../store/app/selectors';
import images from '../../../assets/images';
import './Loading.scss';

function Loading() {
	const theme = useSelector(selectTheme)
	const isLoading = useSelector(selectLoadingState)

	const reloadPage = () => window.location.reload()
	
	return (
		<div className={isLoading === true ? `loading ${theme}` : `loading pause ${theme}`} onClick={() => reloadPage()}>
			<img src={images.loading} alt='' />
		</div>
	);
}

export default Loading;