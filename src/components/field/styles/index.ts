import styled, { css } from 'styled-components';

import { theme } from 'styles';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
	width: 100%;
`;

export const Error = styled.p`
	color: red;
	margin-top: 5px;
	padding-left: 15px;
`;

export const Input =
	styled.input <
	{ error: string | undefined } >
	`
	${({ error, theme }) => css`
        background: {theme.colors.white};
        border: solid 2px ${error ? 'red' : theme.colors.lightGray};
        border-radius: 10px;
        color: {theme.colors.black}; 
        height: 40px;
        padding: 0 15px;

        &: focus {
            border: solid 2px ${theme.colors.blue};
            outline: none;
        }
    `};
`;

export const Label =
	styled.label <
	{ error: string | undefined } >
	`
	${({ error, theme }) => css`
		color: ${error ? 'red' : theme.colors.black};
		font-weight: bold;
		margin-bottom: 5px;
		padding-left: 15px;
	`};
`;
