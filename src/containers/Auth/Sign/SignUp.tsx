import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { selectTheme } from '../../../store/app/selectors';
import { signUpService } from '../../../services/auth/auth.service';
import { PATH } from '../../../common/utils';
import { selectAccessToken } from '../../../store/authentication/selectors';
import './Sign.scss';

function SignUp() {
	const theme = useSelector(selectTheme);
	const accessToken = useSelector(selectAccessToken);

	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		if (accessToken !== '') {
			navigate(PATH.ACCOUNT)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessToken])

	const goToSignIn = () => {
		navigate(PATH.SIGN_IN);
	};

	const handleOnChangeInput = (e: any, id: string) => {
		if (id === 'username') {
			setUsername(e.target.value);
		}
		if (id === 'email') {
			setEmail(e.target.value);
		}
		if (id === 'password') {
			setPassword(e.target.value);
		}
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleSignUp = async () => {
		const result = await signUpService({
			username: username,
			email: email,
			password: password,
		});
		if (result.statusCode === 200) {
			return goToSignIn()
		}
	};

	return (
		<div className={`form ${theme}`}>
			<div className="form-title">Sign Up</div>
			<div className="form-content">
				<div className="form-input-wrapper">
					<label>Username</label>
					<div className="input-row">
						<input type="text" placeholder="" value={username} onChange={(e) => handleOnChangeInput(e, 'username')} />
					</div>
				</div>
				<div className="form-input-wrapper">
					<label>Email</label>
					<div className="input-row">
						<input type="text" placeholder="" value={email} onChange={(e) => handleOnChangeInput(e, 'email')} />
					</div>
				</div>
				<div className="form-input-wrapper">
					<label>Password</label>
					<div className="input-row">
						<input type={showPassword === false ? 'password' : 'text'} placeholder="" value={password} onChange={(e) => handleOnChangeInput(e, 'password')} />
						<span onClick={handleShowPassword}>
							{showPassword === false ? (
								<FontAwesomeIcon icon={faEyeSlash} className="show-password" />
							) : (
								<FontAwesomeIcon icon={faEye} className="show-password" />
							)}
						</span>
					</div>
				</div>
			</div>
			<div className="form-button">
				<div className="btn-submit" onClick={() => handleSignUp()}>Sign Up</div>
			</div>
			<div className="form-action">
				<div className="action"></div>
				<div className="action" onClick={goToSignIn}>
					<span>Sign In</span>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
