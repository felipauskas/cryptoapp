import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { getChartData } from "store/cryptoChart/chartActions";
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
import { useViewport } from "utils";

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
			{width > breakpoint && (
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
			{width < breakpoint && (
				<>
					<Carousel swipeScrollTolerance={10} showIndicators={false}>
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
					</Carousel>
				</>
			)}
		</>
	);
};

export default CryptoChart;
