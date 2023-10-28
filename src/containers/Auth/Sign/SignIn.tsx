import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { PATH } from '../../../common/utils';
import { selectTheme } from '../../../store/app/selectors';
import { signInService } from '../../../services/auth/auth.service';
import { useAppDispatch } from '../../../store/hooks';
import { setAccessToken } from '../../../store/authentication/slices';
import { selectAccessToken } from '../../../store/authentication/selectors';
import './Sign.scss';

function SignIn() {
	const theme = useSelector(selectTheme);
	const accessToken = useSelector(selectAccessToken);
	const dispatch = useAppDispatch();

	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		if (accessToken !== '') {
			navigate(PATH.ACCOUNT)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessToken])

	const goToSignUp = () => {
		navigate(PATH.SIGN_UP);
	};

	const handleOnChangeInput = (e: any, id: string) => {
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

	const handleSignIn = async () => {
		const result = await signInService({
			email: email,
			password: password,
		});
		if (result.statusCode === 200) {
			dispatch(setAccessToken(result.data));
		}
	};

	return (
		<div className={`form ${theme}`}>
			<div className="form-title">Sign In</div>
			<div className="form-content">
				<div className="form-input-wrapper">
					<label>Email</label>
					<div className="input-row">
						<input type="text" placeholder="" value={email} onChange={(e) => handleOnChangeInput(e, 'email')} />
					</div>
				</div>
				<div className="form-input-wrapper">
					<label>Password</label>
					<div className="input-row">
						<input
							type={showPassword === false ? 'password' : 'text'}
							placeholder=""
							value={password}
							onChange={(e) => handleOnChangeInput(e, 'password')}
						/>
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
				<div className="btn-submit" onClick={() => handleSignIn()}>
					Sign In
				</div>
			</div>
			<div className="form-action">
				<div className="action">
					<span>Forgot?</span>
				</div>
				<div className="action" onClick={goToSignUp}>
					<span>Sign up</span>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
