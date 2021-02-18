import React, { FC, Fragment } from 'react';

import { Button, H1 } from 'components';
import { useHistory } from 'react-router-dom';

const SignupPage: FC = () => {
	const history = useHistory();

	const goToHome = () => {
		history.push('/');
	};

	const goToLogin = () => {
		history.push('/login');
	};

	return (
		<Fragment>
			<H1>Signup</H1>
			<Button onClick={goToLogin}>Login Instead</Button>
			<Button onClick={goToHome}>Back To Home</Button>
		</Fragment>
	);
};

export default SignupPage;
