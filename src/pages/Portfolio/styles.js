import styled from "styled-components";

export const PortfolioContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin-bottom: 100px;
`;

export const AddAssetBtn = styled.div`
	display: flex;
	background: #06d554;
	width: 500px;
	justify-content: center;
	align-items: center;
	height: 80px;
	border-radius: 12px;
	margin: 50px 0 0 0;
	cursor: pointer;

	@media (max-width: 769px) {
		width: 90%;
		margin: 20px 0px 0 0px;
		height: 60px;
	} ;
`;

export const PortfolioCoinsDiv = styled.div`
	display: flex;
	flex-flow: column;
	width: 90%;
`;

export const Statistics = styled.span`
	margin: 25px 0 25px 0;
	font-size: 18px;
	width: 100%;
	font-weight: 500;

	@media (max-width: 769px) {
		margin: 15px 0 15px 0;
	}
`;
