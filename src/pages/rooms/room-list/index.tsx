import { H1 } from 'components';
import { useRooms } from 'hooks';
import React, { FC } from 'react';
import Room from './room';
import { RoomListContainer, Title, TitleContainer } from './room/styles';

const RoomList: FC = () => {
  const { isFetching, rooms } = useRooms();

  if (isFetching) return <H1>Fetching Rooms</H1>;
  if (rooms.length === 0) return <H1>No Rooms Found</H1>;

  return (
    <RoomListContainer>
      <TitleContainer>
        <Title>Room Owner</Title>
        <Title>Room ID</Title>
      </TitleContainer>
      {rooms.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </RoomListContainer>
  );
};

export default RoomList;
