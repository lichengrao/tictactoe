export type SYMBOL = 'X' | 'O';
export type BLOCK = SYMBOL | null;

export interface Room {
	board: Array<SYMBOL | null>;
	id: string;
	isGameDone: boolean;
	message: string;
	owner: string;
	playerOId?: string;
	playerTurn: SYMBOL;
	playerXId?: string;
	startingTurn: SYMBOL;
	turnNumber: number;
}

export interface RoomItem {
	id: string;
	owner: string;
}

export interface User {
	displayName: string;
	id: string;
	roomId?: string;
}
