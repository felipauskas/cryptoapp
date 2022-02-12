import styled from "styled-components";
import { AutoComplete } from "antd";
const { Option } = AutoComplete;

export const StyledComplete = styled(AutoComplete)`
	color: #fff;
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

export const StyledForm = styled.form`
	width: 100%;
	font-size: 20px;

	.ant-select-selector {
		background-color: transparent !important;
		font-size: 16px;
		border: 0px !important;
		box-shadow: none !important;
	}
`;

export const StyledOption = styled(Option)``;
