import styled from 'styled-components';

export const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Board = styled.div`
    display grid;
    grid: repeat(3, 1fr) / repeat(3, 1fr);
`;

export const Block = styled.div`
	align-items: center;
	border: solid 1px black;
	cursor: pointer;
	display: flex;
	height: 50px;
	justify-content: center;
	transition: 0.3s;
	width: 50px;

	&:hover {
		background-color: lightgray;
	}
`;

export const Button = styled.button`width: 156px;`;
