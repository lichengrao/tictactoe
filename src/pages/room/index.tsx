import { useHistory, useParams } from 'react-router-dom';
import { Block, Board, Container } from './styles';
import { useClearBoard, useMarkBoard, useRoom } from 'hooks';
import { H1, Button } from 'components';

const Room = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const { isClearing, clearBoard } = useClearBoard();
  const { isFetching, room } = useRoom();
  const { isMarking, markBoard } = useMarkBoard();
  const history = useHistory();

  if (isFetching) return <H1>Loading Room...</H1>;
  if (!room) return <H1>Room Not Found</H1>;

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

  const goToHome = () => {
    history.push('/');
  };

  return (
    <Container marking={isMarking}>
      <h3>{message}</h3>
      <Board>{blocks}</Board>
      <Button disabled={isClearing} onClick={handleClear}>
        Clear Board
      </Button>
      <Button onClick={goToHome}>Back To Home</Button>
    </Container>
  );
};

export default Room;
