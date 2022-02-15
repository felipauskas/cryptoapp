export const lineChartOptions = {
	responsive: true,
	layout: {
		padding: {
			left: 10,
			right: 20,
			top: 10,
			bottom: 10,
		},
	},
	elements: {
		point: {
			radius: 4,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
		tooltip: true,
		decimation: true,
	},
	scales: {
		y: {
			display: false,
		},
		x: {
			title: {
				display: false,
			},
			grid: {
				display: false,
			},
		},
	},
};

export const barChartOptions = {
	responsive: true,
	layout: {
		padding: 20,
	},
	elements: {
		point: {
			radius: 4,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
		tooltip: true,
		decimation: true,
	},
	scales: {
		y: {
			display: false,
		},
		x: {
			title: {
				display: false,
			},
			grid: {
				display: false,
			},
		},
	},
};

export const convertToMoney = new Intl.NumberFormat("us-EN", {
	minimumFractionDigits: 0,
});
