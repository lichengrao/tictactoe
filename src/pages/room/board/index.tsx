import { useCurrentUser, useMarkBoard } from 'hooks';
import React, { FC } from 'react';
import { Room } from 'typings';
import { Block, BoardContainer, Container } from '../styles';

interface IProps {
  room: Room;
}

const Board: FC<IProps> = ({ room }) => {
  const { isMarking, markBoard } = useMarkBoard();
  const currentUser = useCurrentUser();

  const { board, isGameDone, playerOId, playerTurn, playerXId } = room;

  const blocks = Array.from(Array(9).keys()).map((num: number) => {
    return (
      <Block key={num} onClick={() => handleClick(num)}>
        {board[num]}
      </Block>
    );
  });

  const handleClick = async (boardIndex: number) => {
    if (!isMarking && !board[boardIndex] && !isGameDone) {
      if (
        (playerTurn === 'X' && currentUser?.id === playerXId) ||
        (playerTurn === 'O' && currentUser?.id === playerOId)
      ) {
        await markBoard(boardIndex, room!);
      }
    }
  };

  return (
    <>
      <Container marking={isMarking}>
        <BoardContainer>{blocks}</BoardContainer>
      </Container>
    </>
  );
};

export default Board;
