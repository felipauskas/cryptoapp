import styled from "styled-components";

export const ChartDiv = styled.div`
	display: flex;
	flex-flow: column;
	width: 48%;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	margin-bottom: 40px;
	border-radius: 12px;
	align-items: flex-start;

	@media (max-width: 769px) {
		width: 100%;
		margin-bottom: 0px;
	}
`;

export const DataLabel = styled.span`
	font-size: 20px;
	font-weight: 300;
	margin: 20px 0 0 20px;

	@media (max-width: 769px) {
		margin: 10px 0 0 20px;
		font-size: 14px;
	}
`;

export const DataValue = styled.span`
	font-size: 34px;
	font-weight: 700;
	margin-left: 20px;

	@media (max-width: 769px) {
		font-size: 18px;
	}
`;

export const CurrentDate = styled.span`
	font-size: 18px;
	font-weight: 300;
	margin: 0 0 20px 20px;

	@media (max-width: 769px) {
		margin: 0 0 0 20px;
		font-size: 14px;
	}
`;
