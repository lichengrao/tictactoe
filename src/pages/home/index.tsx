import { Button, H1, Logout } from 'components';
import { useCreateRoom, useCurrentUser } from 'hooks';
import React, { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Home: FC = () => {
  const history = useHistory();
  const currentUser = useCurrentUser();
  const { createRoom, isCreatingRoom } = useCreateRoom();

  const goToGameRoom = () => {
    history.push('/r/AAAA');
  };

  const goToLogin = () => {
    history.push('/login');
  };

  const goToProfile = () => {
    history.push(`/u/${currentUser!.id}`);
  };

  const goToSignup = () => {
    history.push('/signup');
  };

  const handleCreateRoom = async () => {
    const roomId = await createRoom();
    history.push(`/r/${roomId}`);
  };

  return (
    <Fragment>
      <H1>Home Page</H1>
      <Button onClick={goToGameRoom}>Go to Game Room</Button>
      {currentUser ? (
        <Fragment>
          <Button disabled={isCreatingRoom} onClick={handleCreateRoom}>
            Create Room
          </Button>
          <Button onClick={goToProfile}>Profile</Button>
          <Logout />
        </Fragment>
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
