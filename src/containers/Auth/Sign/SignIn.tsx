import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { PATH } from '../../../common/utils';
import './Sign.scss';

function SignIn() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const goToSignUp = () => {
		navigate(PATH.SIGN_UP);
	};

	return (
		<>
			<div className="form">
				<div className="form-title">Sign In</div>
				<div className="form-content">
					<div className="form-input-wrapper">
						<label>Username</label>
						<div className="input-row">
							<input type="text" placeholder="" />
						</div>
					</div>
					<div className="form-input-wrapper">
						<label>Password</label>
						<div className="input-row">
							<input type={showPassword === false ? 'password' : 'text'} placeholder="" />
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
					<div className="btn-submit">Sign In</div>
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
		</>
	);
}

export default SignIn;
