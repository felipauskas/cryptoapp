import styled from "styled-components";
import { ReactComponent as Converter } from "./converter.svg";

export const DateRangeDiv = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const RadioDiv = styled.div`
	display: flex;
	margin: 0 20px 0 0%;
	align-items: center;
`;

export const HiddenRadioButton = styled.input.attrs({
	type: "radio",
})`
	height: 35px;
	width: 35px;
	margin: 0 5px 0 0;
	cursor: pointer;
	position: absolute;
	opacity: 0;
`;

export const RadioButton = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid #06d554;

	${HiddenRadioButton}:checked + && {
		background: #06d554;
		box-shadow: 0px 0px 0px 6px rgba(6, 213, 84, 0.2);
	}
`;

export const RadioLabel = styled.label`
	margin: 0 0 0 10px;
`;

export const ConverterSVG = styled(Converter)`
	margin: 0px 20px 0px 20px;
`;

export const ConverterDiv = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	height: 100px;
`;

export const CurrencyDiv = styled.div`
	display: flex;
	border-radius: 8px 0px 0px 8px;
	background: #06d554;
	width: 83px;
	height: 50px;
	border: none;
	align-items: center;
	justify-content: center;
`;

export const CurrencyInput = styled.input`
	background: #2c2d33;
	border-radius: 0px 8px 8px 0px;
	width: 260px;
	height: 50px;
	border: ${(props) => (props.isNaN ? "1px solid #FE1040" : "none")};
	outline: none;
	color: white;
	font-size: 16px;
	padding: 0 0 0 20px;
`;
