import React, { FC, Fragment, useState } from 'react';

import { Button, Error } from 'components';
import { auth } from 'services';

const Logout: FC = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [firebaseErr, setFirebaseErr] = useState<string | undefined>();

  async function handleClick() {
    setIsLoggingOut(true);
    setFirebaseErr(undefined);

    try {
      await auth.signOut();
    } catch (err) {
      setFirebaseErr(err.message);
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <Fragment>
      <Button disabled={isLoggingOut} onClick={handleClick}>
        Log Out
      </Button>
      {firebaseErr && <Error>{firebaseErr}</Error>}
    </Fragment>
  );
};

export default Logout;
