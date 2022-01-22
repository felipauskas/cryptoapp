import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const StyledForm = styled.form`
	width: 100%;
`;

export const ResultsDiv = styled.div`
	color: #fff;
	position: absolute;
	width: 440px;
	z-index: 1;
	display: flex;
	flex-flow: column;
`;

export const CoinResult = styled(Link)`
	width: 100%;
	background: #2c2f36;
	margin: 0 0 0 1px;
	text-decoration: none;
	color: #fff;

	&:hover {
		background: #fff;
		color: #2c2f36;
	}
`;
