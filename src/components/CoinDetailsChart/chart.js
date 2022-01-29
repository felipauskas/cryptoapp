import React from "react";
import { Line } from "react-chartjs-2";
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
import { LineChartDiv } from "./styles";

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

export default function LineChart(props) {
	const lineChartData = {
		labels: props.dateLabels.slice(0, -2),
		datasets: [
			{
				data: props.dailyPrice.slice(0, -2),
				fill: true,
				borderColor: "rgba(0, 255, 95, 0.56)",
				backgroundColor: "rgba(0, 255, 95, 0.3)",
				tension: 0.1,
			},
		],
	};

	return (
		<>
			<LineChartDiv>
				<Line data={lineChartData} options={lineChartOptions} />
			</LineChartDiv>
		</>
	);
}

export const lineChartOptions = {
	response: false,
	maintainAspectRatio: false,
	layout: {
		padding: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
		},
	},
	elements: {
		point: {
			radius: 0,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
		tooltip: false,
		decimation: false,
	},
	scales: {
		y: {
			display: false,
		},
		x: {
			title: {
				display: false,
			},
			display: false,
			grid: {
				display: false,
			},
		},
	},
};
