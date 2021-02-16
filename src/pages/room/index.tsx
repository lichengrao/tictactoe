import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Block, Container, Board, Button } from 'styles';
import { useClearBoard, useMarkBoard, useRoom } from 'hooks';

const Room = () => {
	const { roomId } = useParams<{ roomId: string }>();
	const { isClearing, clearBoard } = useClearBoard();
	const { isFetching, room } = useRoom();
	const { isMarking, markBoard } = useMarkBoard();

	if (isFetching) return <h1>Loading Room...</h1>;
	if (!room) return <h1>Room Not Found</h1>;

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

	const handleClick = async (boardIndex: number) => {
		if (!isMarking && !board[boardIndex] && !isGameDone) {
			await markBoard(boardIndex, room!);
		}
	};

	const handleClear = async () => {
		if (!isClearing) {
			await clearBoard(startingTurn);
		}
	};

	const blocks = Array.from(Array(9).keys()).map((num: number) => {
		return (
			<Block key={num} onClick={() => handleClick(num)}>
				{board[num]}
			</Block>
		);
	});

	return (
		<Container>
			<h3>{message}</h3>
			<Board>{blocks}</Board>
			<Button disabled={isClearing} onClick={handleClear}>
				Clear Board
			</Button>
		</Container>
	);
};

export default Room;
