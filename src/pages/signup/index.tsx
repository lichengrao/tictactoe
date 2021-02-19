import React, { FC, Fragment, useEffect, useState } from 'react';

import { Button, Field, H1 } from 'components';
import { useHistory } from 'react-router-dom';
import { validateEmail } from 'helpers';

const SignupPage: FC = () => {
	const history = useHistory();
	const [ email, setEmail ] = useState('');
	const [ emailErr, setEmailErr ] = useState<string | undefined>();
	const [ password, setPassword ] = useState('');
	const [ passwordErr, setPasswordErr ] = useState<string | undefined>();
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ confirmPasswordErr, setConfirmPasswordErr ] = useState<
		string | undefined
	>();

	useEffect(
		() => {
			setEmailErr(undefined);
			setPasswordErr(undefined);
			setConfirmPasswordErr(undefined);
			return () => {
				//cleanup;
			};
		},
		[ email, password, confirmPassword ]
	);

	const handleSignup = () => {
		if (email.length === 0) return setEmailErr('Email is required!');
		if (!validateEmail(email))
			return setEmailErr('Email address must be valid!');

		if (password.length === 0) return setPasswordErr('Password is required!');
		if (password.length < 6)
			return setPasswordErr('Passwords must be at least 6 characters long!');

		if (confirmPassword.length === 0)
			return setConfirmPasswordErr('Confirm password is required!');
		if (password !== confirmPassword) {
			setPasswordErr('Passwords must match!');
			return setConfirmPasswordErr('Passwords must match!');
		}
	};

	const goToHome = () => {
		history.push('/');
	};

	const goToLogin = () => {
		history.push('/login');
	};

	return (
		<Fragment>
			<H1>Signup</H1>
			<Field
				errMessage={emailErr}
				id="email"
				label="* Email"
				onChange={setEmail}
				placeHolder="Enter Email"
				type={email}
				value={email}
			/>
			<Field
				errMessage={passwordErr}
				id="password"
				label="* Password"
				onChange={setPassword}
				placeHolder="Enter Password"
				type="password"
				value={password}
			/>
			<Field
				errMessage={confirmPasswordErr}
				id="confirm-password"
				label="* Confirm Password"
				onChange={setConfirmPassword}
				placeHolder="Confirm Password"
				type="password"
				value={confirmPassword}
			/>
			<Button onClick={handleSignup}>Signup</Button>
			<Button onClick={goToLogin}>Login Instead</Button>
			<Button onClick={goToHome}>Back To Home</Button>
		</Fragment>
	);
};

export default SignupPage;
