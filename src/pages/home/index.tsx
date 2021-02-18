import { Button, H1 } from 'components';
import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Home: FC = () => {
	const history = useHistory();

	const goToGameRoom = () => {
		history.push('/room/AAAA');
	};

	const goToLogin = () => {
		history.push('/login');
	};

	const goToSignup = () => {
		history.push('/signup');
	};

	return (
		<Fragment>
			<H1>Home Page</H1>
			<Button onClick={goToGameRoom}>Go to Game Room</Button>
			<Button onClick={goToLogin}>Login</Button>
			<Button onClick={goToSignup}>Signup</Button>
		</Fragment>
	);
};

export default Home;
