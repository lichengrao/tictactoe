import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from 'services';
import { SYMBOL } from 'typings';

interface Output {
  isClearing: boolean;
  clearBoard: (startingTurn: SYMBOL) => Promise<void>;
}

const useClearBoard = (): Output => {
  const { roomId } = useParams<{ roomId: string }>();
  const [isClearing, setIsClearing] = useState<boolean>(false);

  async function clearBoard(startingTurn: SYMBOL) {
    setIsClearing(true);
    const newStartingTurn = startingTurn === 'X' ? 'O' : 'X';

    try {
      await db
        .collection('rooms')
        .doc(roomId)
        .update({
          board: new Array(9).fill(null),
          isGameDone: false,
          message: `${newStartingTurn}'s Turn`,
          playerTurn: newStartingTurn,
          turnNumber: 1,
          startingTurn: newStartingTurn,
        });
    } catch (err) {
      console.error(err);
    }
    setIsClearing(false);
  }
  return { isClearing, clearBoard };
};

export default useClearBoard;
