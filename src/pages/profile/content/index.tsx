import React, { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCurrentUser, useUpdateProfile } from 'hooks';
import { Button, Field } from 'components';
import { User } from 'typings';

const Content: FC<{ user: User }> = ({ user }) => {
  const { userId } = useParams<{ userId: string }>();
  const { isUpdatingProfile, updateProfile } = useUpdateProfile(userId);
  const currentUser = useCurrentUser();
  const [displayName, setDisplayName] = useState<string>(user.displayName);

  const isCurrentUser: boolean = useMemo(() => currentUser?.id === userId, [
    currentUser,
    userId,
  ]);

  useEffect(() => {
    setDisplayName(user.displayName);
  }, [user]);

  function handleUpdate() {
    if (isCurrentUser) updateProfile(displayName);
  }

  return (
    <Fragment>
      <Field
        disabled={!isCurrentUser}
        id="display-name"
        label="Display Name"
        onChange={setDisplayName}
        placeHolder="Enter Display Name"
        value={displayName}
      />
      {isCurrentUser && (
        <Button disabled={isUpdatingProfile} onClick={handleUpdate}>
          {isUpdatingProfile ? 'Updating' : 'Update'}
        </Button>
      )}
    </Fragment>
  );
};

export default Content;
