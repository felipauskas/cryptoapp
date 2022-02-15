import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as ArrowDownSVG } from "./arrowdown.svg";
import { ReactComponent as OverviewIcon } from "./Overview.svg";
import { ReactComponent as PortfolioIcon } from "./Portfolio.svg";
import { ReactComponent as CloseArrow } from "./close-arrow.svg";
import { Dropdown } from "antd";

export const StyledLink = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 20px 0 0;
	width: 167px;
	height: 57px;
	background: transparent;
	border-radius: 12px;
	color: #ffffff;
	text-decoration: none;
	font-size: 18px;

	&.currentPage {
		background: #2c2f36;
	}
`;

export const NavDiv = styled.div`
	display: flex;
	flex-flow: row;
	width: 100%;
	background: #191b1f;
`;

export const NavItems = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 20px 20px 100px;
	width: 100%;
	max-width: 1920px;

	@media (max-width: 769px) {
		margin: 20px 0px 20px 0px;
	} ;
`;

export const PagesDiv = styled.div`
	display: flex;
	width: 30%;
`;

export const ActionsDiv = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 769px) {
		justify-content: space-between;
	} ;
`;

export const StyledSearch = styled(Search)`
	margin: 0 20px;
	fill: #fff;
`;

export const SearchDiv = styled.div`
	display: flex;
	background: #2c2f36;
	width: 40%;
	height: 57px;
	margin: 0 20px 0 0;
	border-radius: 12px;
	align-items: center;

	@media (max-width: 769px) {
		width: 100%;
	} ;
`;

export const SearchBar = styled.input`
	height: 100%;
	width: 100%;
	background: transparent;
	border: none;
	font-size: 16px;
	color: #fff;
	outline: none;
	border-radius: 12px;
`;

export const CurrencyDiv = styled.div`
	display: flex;
	background: #2c2f36;
	width: 100px;
	height: 57px;
	margin: 0 20px 0 0;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
`;

export const Dollar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background: #191b1f;
	margin: 0 5px 0 0px;
	color: #00ff5f;
`;

export const StyledDropdown = styled(Dropdown)`
	background: transparent;
	border: none;
	font-size: 14px;
	width: 30px;
	padding: 0;

	&:hover {
		background: transparent;
		color: #fff;
	}

	&:active {
		background: transparent;
		color: #fff;
	}

	&:focus {
		background: transparent;
		color: #fff;
	}
`;

export const Option = styled.span`
	cursor: pointer;
`;

export const ArrowDown = styled(ArrowDownSVG)`
	margin: 0 5px;
`;

export const ThemeConverter = styled.div`
	display: flex;
	background: #2c2f36;
	width: 57px;
	height: 57px;
	border-radius: 12px;
`;

export const Overview = styled.span`
	font-size: 30px;
	font-weight: 900;
	margin-left: 20px;
`;

export const NavMobile = styled.div`
	display: flex;
	width: 100%;
	background: rgba(44, 45, 51, 1);
	z-index: 1;
	position: fixed;
	left: 0;
	bottom: 0;
	height: 70px;
	margin: 0px 0 0px 0;
	justify-content: space-around;
`;

export const IconDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	gap: 5px;
	margin: 5px 0 0 0;
`;

export const IconTitle = styled.div`
	font-size: 12px;
`;

export const OverviewSVG = styled(OverviewIcon)`
	fill: ${(props) => (props.page === "/" ? "#00FC2A" : "#FFF")};
`;

export const PortfolioSVG = styled(PortfolioIcon)`
	fill: ${(props) => (props.page === "/portfolio" ? "#00FC2A" : "#FFF")};
`;

export const SearchSVG = styled(Search)`
	fill: ${(props) => (props.page === "/search" ? "#00FC2A" : "#FFF")};
`;

export const CloseSVG = styled(CloseArrow)`
	fill: #fff;
	width: 15px;
	height: auto;
`;

export const SearchContainer = styled.div`
	display: flex;
	flex-flow: column;
	margin: 0 0 0 0;
	width: 100%;
	height: 90%;
	background: rgba(23, 24, 33, 1);
	padding: 5px 15px 0 15px;
`;

export const TitleDiv = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	width: 100%;
	margin: 10px 0 10px 10px;
`;

export const CloseTitle = styled.span`
	margin-left: 10px;
	font-size: 30px;
	font-weight: 900;
`;
