import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
	ConverterDiv,
	ConverterSVG,
	CurrencyDiv,
	CurrencyInput,
	DateRangeDiv,
	RadioDiv,
	RadioButton,
	HiddenRadioButton,
	RadioLabel,
} from "./styles";
import CoinDetailsChart from "components/CoinDetailsChart";

export default function CoinConverter(props) {
	const queryString = require("query-string");
	const [currencyValue, setCurrency] = useState("");
	const [coinValue, setCoin] = useState("");
	const { dateRange } = queryString.parse(window.location.search);
	const [chartDateRange, setDateRange] = useState(dateRange == null ? "30" : dateRange);
	const history = useHistory();

	const dateArray = ["7d", "14d", "30d", "90d", "1y", "Max"];

	const handleChange = ({ target: { name, value } }) => {
		if (name === "currency") {
			setCurrency(value);
			switch (isNaN(value)) {
				default:
					break;
				case true:
					setCoin("");
					break;
				case false:
					setCoin((value / props.amount).toFixed(2));
					break;
			}
		} else {
			setCoin(value);
			switch (isNaN(value)) {
				default:
					break;
				case true:
					setCurrency("");
					break;
				case false:
					setCurrency((props.amount * value).toFixed(2));
					break;
			}
		}
	};

	const handleClick = (e) => {
		switch (e.target.value) {
			default:
				break;
			case "7d":
				setDateRange("7");
				history.push({
					pathname: window.location.pathname,
					search: "?dateRange=7",
				});
				break;
			case "14d":
				setDateRange("14");
				history.push({
					pathname: window.location.pathname,
					search: "?dateRange=14",
				});
				break;
			case "30d":
				setDateRange("30");
				history.push({
					pathname: window.location.pathname,
					search: "?dateRange=30",
				});
				break;
			case "90d":
				setDateRange("90");
				history.push({
					pathname: window.location.pathname,
					search: "?dateRange=90",
				});
				break;
			case "1y":
				setDateRange("365");
				history.push({
					pathname: window.location.pathname,
					search: "?dateRange=365",
				});
				break;
			case "Max":
				setDateRange("max");
				history.push({
					pathname: window.location.pathname,
					search: "?dateRange=max",
				});
				break;
		}
	};

	return (
		<>
			<DateRangeDiv>
				{dateArray.map((element) => (
					<RadioDiv key={element}>
						<HiddenRadioButton
							onClick={handleClick}
							id={element}
							defaultChecked={element === "30d" ? "checked" : ""}
							name="date-range"
							value={element}
						/>
						<RadioButton></RadioButton>
						<RadioLabel for={element}>{element}</RadioLabel>
					</RadioDiv>
				))}
			</DateRangeDiv>
			<ConverterDiv>
				<CurrencyDiv>
					<span>{props.currency.toUpperCase()}</span>
				</CurrencyDiv>
				<CurrencyInput
					isNaN={isNaN(currencyValue)}
					onChange={handleChange}
					value={currencyValue}
					name="currency"
				/>
				<ConverterSVG />
				<CurrencyDiv>
					<span>{props.coin.toUpperCase()}</span>
				</CurrencyDiv>
				<CurrencyInput
					isNaN={isNaN(coinValue)}
					value={coinValue}
					name="coin"
					onChange={handleChange}
				/>
			</ConverterDiv>
			<CoinDetailsChart dateRange={chartDateRange} coin={props.name} />
		</>
	);
}
