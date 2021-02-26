import styled, { css } from 'styled-components';

export const Box = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    padding: 5px;
    user-select: none;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 5px;

    color: ${theme.colors.black};
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    align-content: space-between;
  `}
`;

export const RoomListContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 5px;
    background: ${theme.colors.background};
    padding: 5px;
    margin-bottom: 10px;
  `}
`;

export const TitleContainer = styled(Container)`
  ${({ theme }) => css`
    margin: 10px 5px;
  `}
`;

export const RoomContainer = styled(Container)`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.white};
    background: ${theme.colors.white};
    cursor: pointer;
    margin: 15px 5px;

    &:hover {
      border: 2px solid ${theme.colors.lightGray};
      background: ${theme.colors.lightBlue};
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    font-weight: bold;
    padding: 5px;
    user-select: none;
  `}
`;
