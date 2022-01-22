import styled from "styled-components";
import { ReactComponent as Layer } from "./layer.svg";

export const Container = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	width: 100%;
	margin: 20px 0 0px 20px;
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 10%;
	height: 300px;
`;

export const ImageDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 200px;
	background: #191b1f;
	border-radius: 12px;
`;

export const IconDiv = styled.div`
	width: 50%;
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #1f2128;
	border-radius: 12px;
`;

export const CoinName = styled.span`
	font-size: 24px;
	text-align: center;
`;

export const SiteDiv = styled.div`
	display: flex;
	height: 50px;
	width: 100%;
	background: #191b1f;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
`;

export const SiteName = styled.span`
	font-size: 14px;
	text-align: center;
`;

export const PriceDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 20%;
	background: #191b1f;
	border-radius: 12px;
`;

export const Price = styled.span`
	font-size: 40px;
`;

export const LayerSVG = styled(Layer)`
	margin: 20px 0px;
`;

export const AllTime = styled.span`
	font-size: 14px;
`;

export const Date = styled.span`
	font-size: 14px;
`;

export const MarketDiv = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	width: 30%;
	background: #191b1f;
	border-radius: 12px;
`;

export const Title = styled.span`
	font-weight: 900;
`;

export const Details = styled.span``;
