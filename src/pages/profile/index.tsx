import React, { FC, Fragment, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Button, H1 } from 'components';
import { useCurrentUser } from 'hooks';
import Content from './conten';

const ProfilePage: FC = () => {
	const history = useHistory();
	const user = useCurrentUser();
	const { userId } = useParams<{ userId: string }>();

	const goBack = () => {
		history.push('/');
	};

	return (
		<Fragment>
			<H1>Profile</H1>
			{user ? (
				<Content user={user} />
			) : (
				<p>Could not find user with ID: {userId}</p>
			)}
			<Button onClick={goBack}>Back</Button>
		</Fragment>
	);
};

export default ProfilePage;
