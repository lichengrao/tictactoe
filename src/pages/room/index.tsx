import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Block, Container, Board, Button } from 'styles';
import { useMarkBoard, useRoom } from 'hooks';

const Room = () => {
	const { roomId } = useParams<{ roomId: string }>();
	const { isFetching, room } = useRoom();
	const { isMarking, markBoard } = useMarkBoard();
	if (isFetching) return <h1>Loading Room...</h1>;
	if (!room) return <h1>Room Not Found</h1>;

	async function handleClick(boardIndex: number) {
		if (!isMarking && !board[boardIndex] && !isGameDone) {
			await markBoard(boardIndex, room!);
		}
	}

	const handleClear = () => {
		// setStartingTurn(startingTurn === 'x' ? 'o' : 'x');
		// setIsXTurn(startingTurn === 'x');`
		// setBoard([ '-', '-', '-', '-', '-', '-', '-', '-', '-' ]);
		// setTurnNumber(1);
		// setMessage(`${startingTurn.toUpperCase()}'s Turn`);
		// setGameDone(false);
	};

	const {
		board,
		id,
		isGameDone,
		message,
		owner,
		playerOId,
		playerTurn,
		playerXId,
		startingTurn,
		turnNumber,
	} = room;

	const blocks = Array.from(Array(9).keys()).map((num: number) => {
		return (
			<Block key={num} onClick={() => handleClick(num)}>
				{isMarking ? '-' : board[num]}
			</Block>
		);
	});

	return (
		<Container>
			<h3>{message}</h3>
			<Board>{blocks}</Board>
			<Button onClick={handleClear}>Clear Board</Button>
		</Container>
	);
};

export default Room;
