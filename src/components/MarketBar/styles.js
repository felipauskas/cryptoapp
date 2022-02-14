import styled from "styled-components";
import { ReactComponent as Bitcoin } from "./bitcoin.svg";
import { ReactComponent as Ethereum } from "./eth.svg";

export const StyledBTC = styled(Bitcoin)`
	margin: 0 5px 0 0;
`;

export const StyledETH = styled(Ethereum)`
	margin: 0 5px 0 0;
`;

export const MarketDiv = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 769px) {
		background: #2c2d33;
	} ;
`;

export const MarketDisplay = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-around;
	width: 50%;
	gap: 20px;
	height: 50px;
	background: #191b1f;
	border-radius: 0 0 12px 12px;
	padding: 0 2.5%;

	@media (max-width: 769px) {
		width: 100%;
		border-radius: 0;
		background: #2c2d33;
		gap: 10px;
	} ;
`;

export const SliderDiv = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
`;

export const Slider = styled.div`
	height: 10px;
	width: 55px;
	border-radius: 5px;
	background: #ffffff;
	margin: 0 0 0 10px;
`;

export const Completion = styled.div`
	height: 10px;
	width: ${(props) => `${props.size}%` || "100%"};
	border-radius: 5px;
	background: #2172e5;
	position: relative;
`;
