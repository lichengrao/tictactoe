import styled, { css } from 'styled-components';
import { theme } from 'styles';

export const Container = styled.div<{ marking: boolean }>`
  ${({ marking, theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    & > div > div {
      background-color: ${marking
        ? theme.colors.lightGray
        : theme.colors.white};

      &:hover {
        background-color: ${marking
          ? theme.colors.lightGray
          : theme.colors.lightBlue};
      }
    }
  `}
`;

export const Board = styled.div`
  display: grid;
  grid: repeat(3, 1fr) / repeat(3, 1fr);
  max-height: 350px;
  margin-bottom: 30px;
`;

export const Block = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    height: 70px;
    justify-content: center;
    transition: ${theme.transition};
    width: 70px;
    user-select: none;
  `};
`;
