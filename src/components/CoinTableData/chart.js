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

export default function SparklineChart(props) {
	const lineChartData = {
		labels: props.labels.slice(0, 7),
		datasets: [
			{
				data: props.data.slice(0, 7),
				fill: true,
				borderColor: "rgba(0, 255, 95, 0.56)",
				tension: 0.5,
			},
		],
	};

	return <Line data={lineChartData} options={lineChartOptions} />;
}

export const lineChartOptions = {
	response: false,
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
