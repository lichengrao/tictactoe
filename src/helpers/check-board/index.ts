import { checkWin } from 'helpers';
import { BLOCK } from 'pages/room';

interface Input {
	isXTurn: boolean;
	newBoard: BLOCK[];
	turnNumber: number;
}

type CheckBoardOutput = 'XWIN' | 'OWIN' | 'DRAW' | 'NONE';

export default function checkBoard({ isXTurn, newBoard, turnNumber }: Input): CheckBoardOutput {
	if (turnNumber >= 5) {
		const currentPlayerSymbol = isXTurn ? 'x' : 'o';
		let winner = checkWin(newBoard, currentPlayerSymbol);

		if (winner) {
			return currentPlayerSymbol == 'x' ? 'XWIN' : 'OWIN';
		}

		if (turnNumber === 9) {
			return 'DRAW';
		}
	}
	return 'NONE';
}
