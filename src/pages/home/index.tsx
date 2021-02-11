import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Home: FC = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/room/AAAA');
	};
	return (
		<Fragment>
			<h1>Home Page</h1>
			<button onClick={handleClick}>Go to Game Room</button>
		</Fragment>
	);
};

export default Home;
