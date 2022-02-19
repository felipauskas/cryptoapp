import styled from "styled-components";

export const TableName = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-around;
	color: white;
	width: 100%;
	margin-top: 20px;
	height: 50px;
	font-weight: 900;

	@media (max-width: 769px) {
		width: auto;
		margin-top: 10px;
	}
`;

export const Rank = styled.span`
	width: 100px;
	text-align: center;

	@media (max-width: 769px) {
		width: 50px;
	}
`;

export const Name = styled.span`
	width: 300px;

	@media (max-width: 769px) {
		width: 150px;
	}
`;

export const Price = styled.span`
	width: 150px;

	@media (max-width: 769px) {
		width: 100px;
	}
`;

export const Hour = styled.span`
	width: 100px;
`;

export const Day = styled.span`
	width: 100px;
`;
export const Week = styled.span`
	width: 100px;
`;

export const VolumeMarket = styled.div`
	width: 300px;
`;

export const CirculatingSupply = styled.div`
	width: 300px;
`;

export const Last7d = styled.div`
	width: 150px;
	text-align: center;
`;
