import React, { useState, useEffect } from "react";
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
import { CoinDetailsChart } from "components";

export default function CoinConverter(props) {
	const queryString = require("query-string");
	const [currencyValue, setCurrency] = useState("");
	const [coinValue, setCoin] = useState("");
	const { dateRange } = queryString.parse(window.location.search);
	const [chartDateRange, setDateRange] = useState(dateRange);
	const history = useHistory();

	useEffect(() => {
		setDefaultDateRange();
	}, [chartDateRange]);

	const setDefaultDateRange = () => {
		if (dateRange == null) {
			history.push({
				pathname: window.location.pathname,
				search: `?dateRange=30`,
			});
			setDateRange(30);
		}
	};

	const dateObject = {
		"7d": "7",
		"14d": "14",
		"30d": "30",
		"90d": "90",
		"1y": "365",
		Max: "max",
	};

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
		const value = dateObject[e.target.value];
		setDateRange(value);
		history.push({
			pathname: window.location.pathname,
			search: `?dateRange=${value}`,
		});
	};

	return (
		<>
			<DateRangeDiv>
				{dateRange &&
					Object.keys(dateObject).map((element) => (
						<RadioDiv key={element}>
							<HiddenRadioButton
								onClick={handleClick}
								id={element}
								defaultChecked={dateObject[element] === dateRange ? "checked" : ""}
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
