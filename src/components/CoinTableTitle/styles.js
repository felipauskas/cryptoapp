import styled from "styled-components";
import { ReactComponent as ArrowDown } from "./arrow-down.svg";

export const TableName = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-around;
	color: ${(props) => props.theme.styles[props.theme.current].color};
	width: 100%;
	margin-top: 20px;
	height: 50px;
	font-weight: 900;

	@media (max-width: 769px) {
		width: auto;
		margin-top: 10px;
	}
`;

export const Rank = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;

	@media (max-width: 769px) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 75px;
	}
`;

export const Name = styled.div`
	display: flex;
	align-items: center;
	width: 300px;

	@media (max-width: 769px) {
		display: flex;
		align-items: center;
		width: 150px;
	}
`;

export const Price = styled.span`
	display: flex;
	align-items: center;
	width: 150px;

	@media (max-width: 769px) {
		width: 100px;
	}
`;

export const Hour = styled.span`
	display: flex;
	align-items: center;
	width: 100px;
`;

export const Day = styled.span`
	display: flex;
	align-items: center;
	width: 100px;
`;
export const Week = styled.span`
	display: flex;
	align-items: center;
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

export const ArrowSVG = styled(ArrowDown)`
	width: 25px;
	height: 25px;
	transform: ${(props) => (props.direction ? "rotate(180deg)" : "")};
	fill: ${(props) => (props.orderBy === props.value ? "#00FC2A" : props.theme.styles[props.theme.current].color)};
	pointer-events: none;
`;
