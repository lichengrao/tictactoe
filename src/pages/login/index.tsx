import React, { FC, Fragment } from 'react';

import { Button, H1 } from 'components';
import { useHistory } from 'react-router-dom';

const LoginPage: FC = () => {
	const history = useHistory();

	const goToHome = () => {
		history.push('/');
	};

	const goToSignup = () => {
		history.push('/signup');
	};

	return (
		<Fragment>
			<H1>Login</H1>
			<Button onClick={goToSignup}>Signup Instead</Button>
			<Button onClick={goToHome}>Back To Home</Button>
		</Fragment>
	);
};

export default LoginPage;
