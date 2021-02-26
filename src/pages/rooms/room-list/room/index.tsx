import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { RoomItem } from 'typings';

import { Box, RoomContainer } from './styles';

const Room: FC<RoomItem> = ({ id, owner }) => {
  const history = useHistory();

  function handleClick() {
    history.push(`/r/${id}`);
  }

  return (
    <RoomContainer key={id} onClick={handleClick}>
      <Box>{owner}</Box>
      <Box>{id}</Box>
    </RoomContainer>
  );
};

export default Room;
