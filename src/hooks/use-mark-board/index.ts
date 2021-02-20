import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from 'services';
import { Room } from 'typings';

import { getUpdatedGameState } from './helpers';

interface Output {
  isMarking: boolean;
  markBoard: (boardIndex: number, room: Room) => Promise<void>;
}

const useMarkBoard = (): Output => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isMarking, setIsMarking] = useState(false);

  async function markBoard(boardIndex: number, room: Room) {
    setIsMarking(true);
    try {
      const { board, playerTurn, turnNumber } = room;
      const {
        newBoard,
        newIsGameDone,
        newMessage,
        newPlayerTurn,
        newTurnNumber,
      } = getUpdatedGameState({ board, boardIndex, playerTurn, turnNumber });
      await db.collection('rooms').doc(roomId).update({
        board: newBoard,
        isGameDone: newIsGameDone,
        message: newMessage,
        playerTurn: newPlayerTurn,
        turnNumber: newTurnNumber,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsMarking(false);
    }
  }

  return { isMarking, markBoard };
};

export default useMarkBoard;
