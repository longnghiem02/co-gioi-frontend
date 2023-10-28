// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { PATH } from '../../../utils';
import NotSignedIn from '../../Auth/NotSignedIn';
import './Account.scss';
import { selectAccessToken } from '../../../store/authentication/selectors';

function Account() {
	const accessToken = useSelector(selectAccessToken);

	return (
		<>
			{(() => {
				if (accessToken === '') {
					return <NotSignedIn />;
				} else {
					return <p>Account page</p>;
				}
			})()}
		</>
	);
}

export default Account;
