import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectTheme } from '../../../store/app/selectors';
import { PATH } from '../../../common/utils';
import './NotSignedIn.scss';

function NotLoggedIn() {
	const theme = useSelector(selectTheme)
	const navigate = useNavigate();

	const goToSignIn = () => {
		navigate(PATH.SIGN_IN);
	};

	const goToSignUp = () => {
		navigate(PATH.SIGN_UP);
	};

	return (
		<div className={`sign-option ${theme}`}>
			<div className="button sign-in" onClick={() => goToSignIn()}>
				Sign in
			</div>
			<div className="button sign-up" onClick={() => goToSignUp()}>
				Sign up
			</div>
		</div>
	);
}

export default NotLoggedIn;
