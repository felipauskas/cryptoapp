import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as ArrowDownSVG } from "./arrowdown.svg";
import { Menu, Dropdown, Button } from "antd";

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
	justify-content: center;
`;

export const NavItems = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 20px 20px 100px;
	width: 100%;
	min-width: 1024px;
	max-width: 1920px;
`;

export const PagesDiv = styled.div`
	display: flex;
	width: 30%;
`;

export const ActionsDiv = styled.div`
	display: flex;
	width: 70%;
	justify-content: flex-end;
`;

export const StyledSearch = styled(Search)`
	margin: 0 20px;
`;

export const SearchDiv = styled.div`
	display: flex;
	background: #2c2f36;
	width: 40%;
	height: 57px;
	margin: 0 20px 0 0;
	border-radius: 12px;
	align-items: center;
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
