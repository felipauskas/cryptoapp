import styled from "styled-components";
import { ReactComponent as Layer } from "./layer.svg";
import { ReactComponent as Plus } from "./plus.svg";
import { ReactComponent as Links } from "./link.svg";
import { ReactComponent as Group } from "./group.svg";
import { ReactComponent as Waves } from "./waves.svg";

export const Container = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	width: 70%;
	gap: 2.5%;
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 40%;
	height: 300px;
`;

export const ImageDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 10%;
	height: 230px;
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
	font-size: 12px;
	text-align: center;
	flex-grow: 2;
`;

export const PriceDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 70%;
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
	width: 90%;
	background: #191b1f;
	border-radius: 12px;
`;

export const DetailsDiv = styled.div`
	display: flex;
	align-items: center;
	margin: 0 0 0 30px;
`;

export const PlusSVG = styled(Plus)`
	margin: 5px 20px;
`;

export const Title = styled.span`
	font-weight: 900;
`;

export const Details = styled.span`
	margin: 0 0 0 10px;
	font-weight: 300;
`;

export const Description = styled.span`
	font-size: 18px;
	width: 70%;
	font-weight: 300;
	margin: 20px 0 20px 20px;
`;

export const DescriptionContainer = styled.div`
	width: 70%;
	background: #191b1f;
	border-radius: 12px;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-flow: column;
	margin: 0 0 30px 0;
	padding: 0 0 30px 0;
`;

export const CoinDescription = styled.span`
	text-align: center;
	width: 100%;
`;

export const SiteContainer = styled.div`
	display: flex;
	width: 70%;
	gap: 20px;
`;

export const BoxDiv = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	border-radius: 12px;
	height: 64px;
	width: 33%;
	background: #191b1f;
	margin: 0 0 40px 0;
`;

export const LinkSVG = styled(Links)`
	margin: 0 0 0 20px;
`;

export const GroupSVG = styled(Group)`
	margin: 0 20px 0 0;
`;

export const WavesSVG = styled(Waves)``;
