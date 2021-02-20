import React, { FC, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCurrentUser } from 'hooks';
import { Button, Field } from 'components';
import { User } from 'typings';

const Content: FC<{ user: User }> = ({ user }) => {
	const { userId } = useParams<{ userId: string }>();
	const currentUser = useCurrentUser();
	const [ displayName, setDisplayName ] = useState<string>(
		user.displayName || ''
	);

	useEffect(
		() => {
			setDisplayName(user.displayName || '');
		},
		[ user ]
	);

	function handleUpdate() {
		alert('clicked');
	}

	return (
		<Fragment>
			<Field
				id="display-name"
				label="Display Name"
				onChange={setDisplayName}
				placeHolder="Enter Display Name"
				value={displayName}
			/>
			<Button onClick={handleUpdate}>Update</Button>
		</Fragment>
	);
};

export default Content;
