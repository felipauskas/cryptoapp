import styled from "styled-components";

export const ChartDiv = styled.div`
	display: flex;
	flex-flow: column;
	width: 42%;
	/* height: 700px; */
	background: #191b1f;
	margin: 0 0 40px 100px;
	border-radius: 12px;
`;

export const DataLabel = styled.span`
	font-size: 14px;
	font-weight: 300;
	margin: 20px 0 0 20px;
`;

export const DataValue = styled.span`
	font-size: 34px;
	font-weight: 700;
	margin: 0 0 0 20px;
`;

export const CurrentDate = styled.span`
	font-size: 14px;
	font-weight: 300;
	margin: 0 0 20px 20px;
`;
