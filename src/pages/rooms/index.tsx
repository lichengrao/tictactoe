import React, { FC } from 'react';

import { Button, H1 } from 'components';
import { useHistory } from 'react-router-dom';
import RoomList from './room-list';

const Rooms: FC = () => {
  const history = useHistory();

  function goToHome() {
    history.push('/');
  }

  return (
    <>
      <H1>Rooms</H1>
      <RoomList />
      <Button onClick={goToHome}>Back to Home</Button>
    </>
  );
};

export default Rooms;
