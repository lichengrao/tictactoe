import { Button, H1 } from 'components';
import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Home: FC = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/room/AAAA');
	};
	return (
		<Fragment>
			<H1>Home Page</H1>
			<Button onClick={handleClick}>Go to Game Room</Button>
		</Fragment>
	);
};

export default Home;
