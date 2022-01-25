import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import {
	Chart,
	CategoryScale,
	Filler,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { CurrentDate, ChartDiv, DataLabel, DataValue } from "./styles";
import { convertToMoney } from "utils";
import { lineChartOptions, barChartOptions } from "./chartUtils";

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Filler,
	Title,
	Tooltip,
	Legend
);

const CryptoChart = (props) => {
	const [isLoading, setLoading] = useState(false);
	const [hasError, setError] = useState(false);
	const [hasData, setData] = useState(false);
	const [dateLabels, setLabels] = useState([]);
	const [dailyPrice, setPrice] = useState([]);
	const [totalVolumes, setVolumes] = useState([]);

	const getData = async () => {
		setError(false);
		setLoading(true);
		setData(false);
		try {
			const { data } = await axios(
				`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${props.currency}&days=30&interval=daily`
			);
			const dateLabels = data.prices.map((element) => {
				const date = new Date(element[0]).toLocaleString("en-gb", {
					day: "numeric",
					month: "2-digit",
				});
				return date;
			});
			const dailyPrice = data.prices.map((element) => element[1].toFixed(2));
			const totalVolumes = data.total_volumes.map((element) => element[1].toFixed(0));
			setLoading(false);
			setData(true);
			setLabels(dateLabels);
			setPrice(dailyPrice);
			setVolumes(totalVolumes);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setData(false);
			setError(true);
		}
	};

	useEffect(() => {
		getData();
	}, [props.currency]);

	const todayPrice = convertToMoney.format(dailyPrice.slice(-1));
	const todayVolume = convertToMoney.format(totalVolumes.slice(-1));
	const [weekday, month, day, year] = new Date().toString().split(" ");

	const lineChartData = {
		labels: dateLabels.slice(0, -2),
		datasets: [
			{
				data: dailyPrice.slice(0, -2),
				fill: true,
				borderColor: "rgba(0, 255, 95, 0.56)",
				backgroundColor: "rgba(0, 255, 95, 0.3)",
				tension: 0.1,
			},
		],
	};

	const barChartData = {
		labels: dateLabels.slice(0, -2),
		datasets: [
			{
				data: totalVolumes.slice(0, -2),
				backgroundColor: "rgba(33, 114, 229, 1)",
			},
		],
	};

	return (
		<>
			{hasData && (
				<>
					<ChartDiv>
						<DataLabel>BTC</DataLabel>
						<DataValue>${todayPrice}</DataValue>
						<CurrentDate>
							{month} {day}, {year}
						</CurrentDate>
						<Line data={lineChartData} options={lineChartOptions} />
					</ChartDiv>
					<ChartDiv>
						<DataLabel>Volume 24</DataLabel>
						<DataValue>${todayVolume}</DataValue>
						<CurrentDate>
							{month} {day}, {year}
						</CurrentDate>
						<Bar data={barChartData} options={barChartOptions} />
					</ChartDiv>
				</>
			)}
		</>
	);
};

export default CryptoChart;
