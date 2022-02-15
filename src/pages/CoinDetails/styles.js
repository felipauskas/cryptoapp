import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	justify-content: center;

	@media (max-width: 769px) {
		flex-flow: column;
	} ;
`;

export const Summary = styled.span`
	font-size: 18px;
	width: 100%;
	font-weight: 300;
	margin: 20px 0 20px 20px;
`;
