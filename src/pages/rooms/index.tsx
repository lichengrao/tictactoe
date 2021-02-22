import React, { FC } from 'react';

import { H1 } from 'components';
import { useRooms } from 'hooks';
import { useHistory } from 'react-router-dom';

const Rooms: FC = () => {
  const { isFetching, rooms } = useRooms();
  const history = useHistory();

  if (isFetching) return <H1>Fetching Rooms...</H1>;
  if (rooms.length === 0) return <H1>No Rooms Found</H1>;
  console.log(rooms);

  return (
    <>
      <H1>Rooms</H1>
      {rooms.map((room) => (
        <div onClick={() => history.push(`/r/${room.id}`)}>
          {room.id} = {room.owner}
        </div>
      ))}
    </>
  );
};

export default Rooms;
