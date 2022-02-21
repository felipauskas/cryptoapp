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

	@media (max-width: 769px) {
		flex-flow: column;
		align-items: center;
		width: 100%;
		gap: 10px;
		margin-bottom: 100px;
	} ;
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 40%;
	height: 300px;

	@media (max-width: 769px) {
		height: auto;
		width: 100%;
		align-items: center;
		gap: 10px;
	} ;
`;

export const ImageDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 10%;
	height: 230px;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	border-radius: 12px;

	@media (max-width: 769px) {
		height: 150px;
		width: 40%;
	} ;
`;

export const IconDiv = styled.div`
	width: 50%;
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme.styles[props.theme.current].componentBg};
	border-radius: 12px;
`;

export const CoinName = styled.span`
	font-size: 24px;
	text-align: center;

	@media (max-width: 769px) {
		font-size: 16px;
	} ;
`;

export const SiteDiv = styled.div`
	display: flex;
	height: 50px;
	width: 100%;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	border-radius: 12px;
	align-items: center;
	justify-content: center;

	@media (max-width: 769px) {
		height: 40px;
		width: 90%;
	} ;
`;

export const SiteName = styled.span`
	font-size: 16px;
	text-align: center;
	flex-grow: 2;

	@media (max-width: 769px) {
		font-size: 14px;
	} ;
`;

export const PriceDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 70%;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	border-radius: 12px;

	@media (max-width: 769px) {
		width: 90%;
		padding: 5px 0 5px 0;
	} ;
`;

export const Price = styled.span`
	font-size: 40px;

	@media (max-width: 769px) {
		font-size: 24px;
	} ;
`;

export const LayerSVG = styled(Layer)`
	margin: 20px 0 10px 0;

	@media (max-width: 769px) {
		margin: 10px 0 5px 0;
	} ;
`;

export const AllTime = styled.span`
	font-size: 14px;
	margin-top: 10px;
`;

export const Date = styled.span`
	font-size: 14px;
`;

export const MarketDiv = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	width: 90%;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	border-radius: 12px;

	@media (max-width: 769px) {
		padding: 5px 0 5px 0;
	} ;
`;

export const DetailsDiv = styled.div`
	display: flex;
	align-items: center;
	margin: 0 0 0 30px;
`;

export const PlusSVG = styled(Plus)`
	margin: 5px 20px;

	@media (max-width: 769px) {
		margin: 5px 5px;
	} ;
`;

export const Title = styled.span`
	font-weight: 900;

	@media (max-width: 769px) {
		font-size: 12px;
	} ;
`;

export const Details = styled.span`
	margin: 0 0 0 10px;
	font-weight: 300;

	@media (max-width: 769px) {
		font-size: 12px;
	} ;
`;

export const Description = styled.span`
	font-size: 18px;
	width: 70%;
	font-weight: 500;
	margin: 20px 0 20px 0px;

	@media (max-width: 769px) {
		font-weight: 700;
		margin-left: 10px;
	} ;
`;

export const DescriptionContainer = styled.div`
	width: 70%;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
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
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	margin: 0 0 40px 0;
`;

export const LinkSVG = styled(Links)`
	margin: 0 0 0 20px;
	height: 20px;
	width: 20px;
`;

export const GroupSVG = styled(Group)`
	margin: 0 20px 0 0;
	height: 20px;
	width: 20px;
	stroke: ${(props) => (props.id === props.current ? "#00FC2A" : props.theme.styles[props.theme.current].color)};
`;

export const WavesSVG = styled(Waves)``;
