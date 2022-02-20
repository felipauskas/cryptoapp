import styled from "styled-components";

export const TableDiv = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	border-radius: 12px;

	@media (max-width: 769px) {
		flex-flow: row wrap;
		overflow-y: scroll;
		overflow-x: scroll;
		height: 340px;
	}
`;
