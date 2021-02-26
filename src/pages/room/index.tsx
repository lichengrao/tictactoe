import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Board from './board';
import { Block, Container } from './styles';
import { useClearBoard, useMarkBoard, useRoom } from 'hooks';
import { H1, Button } from 'components';
import PlayerDisplay from './player-display';

const Room = () => {
  const { clearBoard, isClearing } = useClearBoard();
  const history = useHistory();
  const { isFetching, room } = useRoom();

  if (isFetching) return <H1>Loading Room...</H1>;
  if (!room) return <H1>Room Not Found</H1>;

  const { message, startingTurn } = room;

  const handleClear = async () => {
    if (!isClearing) {
      await clearBoard(startingTurn);
    }
  };

  const goToHome = () => {
    history.push('/');
  };

  return (
    <>
      <H1>{message}</H1>
      <Board room={room} />
      <PlayerDisplay player="X" room={room} />
      <PlayerDisplay player="O" room={room} />
      <Button disabled={isClearing} onClick={handleClear}>
        Clear Board
      </Button>
      <Button onClick={goToHome}>Back To Home</Button>
    </>
  );
};

export default Room;
