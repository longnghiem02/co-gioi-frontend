// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { PATH } from '../../../utils';
import NotLoggedIn from '../../Auth/NotSignedIn';
import './Account.scss';
import { selectLoggedInState } from '../../../store/authentication/selectors';

function Account() {
	const isLoggedIn = useSelector(selectLoggedInState);
	// const navigate = useNavigate()

	// useEffect(() => {
	// 	if (accountState.isLoggedIn === false || accountState.accountInfo === null) {
	// 		navigate(PATH.LOGIN)
	// 	}
	// })

	return (
		<>
			{(() => {
				if (isLoggedIn === false) {
					return <NotLoggedIn />;
				} else {
					return <p>Account page</p>;
				}
			})()}
		</>
	);
}

export default Account;
