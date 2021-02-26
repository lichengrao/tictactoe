import React, { FC, MouseEvent, useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { P } from 'components';
import {
  useCurrentUser,
  useJoinRoom,
  useLeaveRoom,
  useSearchParams,
  useUser,
} from 'hooks';
import { Room, SYMBOL } from 'typings';

interface IProps {
  player: SYMBOL;
  room: Room;
}

const PlayerDisplay: FC<IProps> = ({ player, room }) => {
  const currentUser = useCurrentUser();
  const history = useHistory();
  const { isJoining, joinRoom } = useJoinRoom();
  const { isLeaving, leaveRoom } = useLeaveRoom();
  const { player: playerSearch } = useSearchParams();

  const playerId = useMemo(
    () => (player === 'X' ? room?.playerXId : room?.playerOId),
    [player, room]
  );

  const { user } = useUser(playerId);

  useEffect(() => {
    if (room && !user && currentUser && playerSearch === player)
      joinRoom(player, currentUser.id);
  }, [room, user, currentUser, playerSearch, player, joinRoom]);

  const renderRemoveUser = useCallback(() => {
    function handleClick(
      e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
    ) {
      e.stopPropagation();
      leaveRoom(player);
    }

    if (currentUser?.id === playerId || currentUser?.id === room?.owner)
      return (
        <>
          &nbsp;
          <span onClick={handleClick}>
            {currentUser?.id === playerId ? 'Leave' : 'Kick'}
          </span>
        </>
      );

    return null;
  }, [currentUser, isLeaving, leaveRoom, player, playerId, room]);

  return (
    <P>
      <strong>Player {player}:</strong>&nbsp;
      {user ? (
        <span onClick={() => history.push(`/u/${playerId}`)}>
          {user.displayName}
          {renderRemoveUser()}
        </span>
      ) : currentUser ? (
        <span onClick={() => joinRoom(player, currentUser.id)}>
          Join{isJoining ? 'ing' : ''}
        </span>
      ) : (
        <span
          onClick={() =>
            history.push(`/login?redirect=r_${room.id}&player=${player}`)
          }
        >
          Login to Join
        </span>
      )}
    </P>
  );
};

export default PlayerDisplay;
