import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { currencyFormat, useViewport } from "utils";
import { getChartData } from "store/cryptoChart/chartActions";
import { lineChartOptions, barChartOptions } from "./chartUtils";
import { CurrentDate, ChartDiv, DataLabel, DataValue } from "./styles";
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

const CryptoChart = () => {
	const dispatch = useDispatch();
	const { currency } = useSelector((state) => state.currency);
	const { width } = useViewport();
	const breakpoint = 769;

	useEffect(() => {
		dispatch(getChartData("bitcoin", "30"));
	}, [currency]);

	const { dailyPrice, totalVolumes, dateLabels } = useSelector((state) => state.chart);

	const todayPrice = dailyPrice.slice(-1);
	const todayVolume = totalVolumes.slice(-1);
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
			{width > breakpoint && (
				<>
					<ChartDiv>
						<DataLabel>BTC</DataLabel>
						<DataValue>{currencyFormat(currency, 2, todayPrice)}</DataValue>
						<CurrentDate>
							{month} {day}, {year}
						</CurrentDate>
						<Line data={lineChartData} options={lineChartOptions} />
					</ChartDiv>
					<ChartDiv>
						<DataLabel>Volume 24</DataLabel>
						<DataValue>{currencyFormat(currency, 0, todayVolume)}</DataValue>
						<CurrentDate>
							{month} {day}, {year}
						</CurrentDate>
						<Bar data={barChartData} options={barChartOptions} />
					</ChartDiv>
				</>
			)}
			{width < breakpoint && (
				<>
					<Carousel swipeScrollTolerance={10} showIndicators={false}>
						<ChartDiv>
							<DataLabel>BTC</DataLabel>
							<DataValue>{currencyFormat(currency, 2, todayPrice)}</DataValue>
							<CurrentDate>
								{month} {day}, {year}
							</CurrentDate>
							<Line data={lineChartData} options={lineChartOptions} />
						</ChartDiv>
						<ChartDiv>
							<DataLabel>Volume 24</DataLabel>
							<DataValue>{currencyFormat(currency, 0, todayVolume)}</DataValue>
							<CurrentDate>
								{month} {day}, {year}
							</CurrentDate>
							<Bar data={barChartData} options={barChartOptions} />
						</ChartDiv>
					</Carousel>
				</>
			)}
		</>
	);
};

export default CryptoChart;
