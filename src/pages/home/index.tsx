import { Button, H1, Logout } from 'components';
import { useUser } from 'hooks';
import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Home: FC = () => {
	const history = useHistory();
	const user = useUser();

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
			{user ? (
				<Logout />
			) : (
				<Fragment>
					<Button onClick={goToLogin}>Login</Button>
					<Button onClick={goToSignup}>Signup</Button>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Home;
