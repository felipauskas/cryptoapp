import styled from "styled-components";

export const TableDiv = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
	background: #191b1f;
	border-radius: 12px;

	@media (max-width: 769px) {
		flex-flow: row wrap;
		overflow-y: scroll;
		overflow-x: scroll;
		height: 340px;
	}
`;
