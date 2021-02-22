import { Button, H1, Logout } from 'components';
import { useCreateRoom, useCurrentUser } from 'hooks';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const Home: FC = () => {
  const history = useHistory();
  const currentUser = useCurrentUser();
  const { createRoom, isCreatingRoom } = useCreateRoom();

  const goToJoinRoom = () => {
    history.push('/r');
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
    <>
      <H1>Home Page</H1>
      <Button onClick={goToJoinRoom}>Go to Game Room</Button>
      {currentUser ? (
        <>
          <Button disabled={isCreatingRoom} onClick={handleCreateRoom}>
            Create Room
          </Button>
          <Button onClick={goToProfile}>Profile</Button>
          <Logout />
        </>
      ) : (
        <>
          <Button onClick={goToLogin}>Login</Button>
          <Button onClick={goToSignup}>Signup</Button>
        </>
      )}
    </>
  );
};

export default Home;
