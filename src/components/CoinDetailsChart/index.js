import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getChartData } from "store/cryptoChart/chartActions";
import LineChart from "./chart";
import { CoinChart } from "./styles";

const CoinDetailsChart = (props) => {
	useEffect(() => {
		props.getChartData(props.coin, props.dateRange);
	}, [props.currency.currency, props.dateRange]);

	const { dailyPrice, dateLabels } = props.chart;

	return (
		<>
			<CoinChart>
				<LineChart dateLabels={dateLabels} dailyPrice={dailyPrice} />
			</CoinChart>
		</>
	);
};

const mapStateToProps = (state) => ({
	chart: state.chart,
	currency: state.currency,
});

const mapDispatchToProps = {
	getChartData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetailsChart);
