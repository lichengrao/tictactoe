import checkWin from './check-win';
import { BLOCK, SYMBOL } from 'typings';

interface Input {
  newBoard: BLOCK[];
  playerTurn: SYMBOL;
  turnNumber: number;
}

type CheckBoardOutput = 'XWIN' | 'OWIN' | 'DRAW' | 'NONE';

export default function checkBoard({
  newBoard,
  playerTurn,
  turnNumber,
}: Input): CheckBoardOutput {
  if (turnNumber >= 5) {
    if (playerTurn === 'X' && checkWin(newBoard, 'X')) return 'XWIN';
    if (playerTurn === 'O' && checkWin(newBoard, 'O')) return 'OWIN';
    if (turnNumber === 9) return 'DRAW';
  }
  return 'NONE';
}
