import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "./search.svg";

export const StyledLink = styled(Link)`
	color: #ffffff;
	text-decoration: none;
	width: 100%;
	text-align: center;
	font-size: 18px;
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
`;

export const PagesDiv = styled.div`
	display: flex;
	width: 50%;
`;

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 20px 0 0;
	width: 167px;
	height: 57px;
	background: #2c2f36;
	border-radius: 12px;
`;

export const ActionsDiv = styled.div`
	display: flex;
	width: 50%;
	justify-content: flex-end;
`;

export const StyledSearch = styled(Search)`
	margin: 0 20px;
`;

export const SearchDiv = styled.div`
	display: flex;
	background: #2c2f36;
	width: 500px;
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
	height: 25px;
	width: 25px;
	border-radius: 50%;
	background: #191b1f;
	margin: 0 5px 0 0px;
	color: #00ff5f;
`;

export const Dropdown = styled.select`
	background: transparent;
	color: #ffffff;
	height: 50%;
	border: 0;
`;

export const Option = styled.option``;

export const ThemeConverter = styled.div`
	display: flex;
	background: #2c2f36;
	width: 57px;
	height: 57px;
	border-radius: 12px;
`;
