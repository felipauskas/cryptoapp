import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinDisplayDiv = styled.div`
	display: flex;
	width: 100%;
	flex-flow: row;
	align-items: center;
	justify-content: space-around;
	color: white;
	border-bottom: 1px solid #707070;
	height: 75px;

	@media (max-width: 769px) {
		/*  */
	}
`;

export const Rank = styled.span`
	width: 100px;
	text-align: center;

	@media (max-width: 769px) {
		width: 50px;
	}
`;

export const ImgName = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	width: 300px;

	@media (max-width: 769px) {
		width: 150px;
	}
`;

export const Image = styled.img`
	width: 30px;
	height: 30px;

	@media (max-width: 769px) {
		width: 20px;
		height: 20px;
	}
`;

export const Name = styled(Link)`
	width: 150px;
	margin: 0 0 0 5px;
	font-size: 16px;
	text-decoration: none;
	color: #fff;

	@media (max-width: 769px) {
		width: 100px;
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
	color: ${(props) => (props.isPositive ? "#00FC2A" : "#FE1040")};
`;

export const Day = styled.span`
	width: 100px;
	color: ${(props) => (props.isPositive ? "#00FC2A" : "#FE1040")};
`;
export const Week = styled.span`
	width: 100px;
	color: ${(props) => (props.isPositive ? "#00FC2A" : "#FE1040")};
`;

export const VolumeMarket = styled.div`
	width: 300px;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
`;

export const CoinSlider = styled.div`
	height: 10px;
	width: 100%;
	border-radius: 5px;
	background: #ffffff;
`;

export const Completion = styled.div.attrs((props) => ({
	size: `${props.size || 100}%`,
}))`
	height: 10px;
	border-radius: 5px;
	position: relative;
	background: #2172e5;
	width: ${(props) => props.size};
`;

export const Volume = styled.span`
	width: 50%;
`;

export const Market = styled.span`
	width: 50%;
	text-align: right;
`;

export const CirculatingSupply = styled.div`
	width: 300px;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
`;

export const Circulating = styled.span`
	width: 50%;
`;

export const Supply = styled.span`
	width: 50%;
	text-align: right;
`;

export const Last7d = styled.div`
	width: 150px;
	height: auto;
	text-align: center;
`;
