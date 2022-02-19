import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 90%;
	justify-content: space-between;

	@media (max-width: 769px) {
		flex-flow: column;
		justify-content: flex-start;
		width: 95%;
		height: 800px;
	}

	.thumbs-wrapper.axis-vertical {
		margin: 0 !important;
	}
`;

export const Overview = styled.span`
	font-size: 18px;
	width: 100%;
	font-weight: 300;
	margin: 20px 0px 20px 0;

	@media (max-width: 769px) {
		margin: 10px 0 10px 0;
	}
`;
