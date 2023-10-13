import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../common/utils';
import './NotSignedIn.scss';

function NotLoggedIn() {
	const navigate = useNavigate();

	const goToSignIn = () => {
		navigate(PATH.SIGN_IN);
	};

	const goToSignUp = () => {
		navigate(PATH.SIGN_UP);
	};

	return (
		<>
			<div className="sign-option">
				<div className="button sign-in" onClick={() => goToSignIn()}>
					Sign in
				</div>
				<div className="button sign-up" onClick={() => goToSignUp()}>
					Sign up
				</div>
			</div>
		</>
	);
}

export default NotLoggedIn;
