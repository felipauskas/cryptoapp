import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChartData } from "store/cryptoChart/chartActions";
import LineChart from "./chart";
import { CoinChart } from "./styles";

const CoinDetailsChart = (props) => {
	const dispatch = useDispatch();
	const { dailyPrice, dateLabels } = useSelector((state) => state.chart);

	useEffect(() => {
		if (props.dateRange) {
			dispatch(getChartData(props.coin, props.dateRange));
		}
	}, [props.coin, props.dateRange]);

	return (
		<CoinChart>
			<LineChart dateLabels={dateLabels} dailyPrice={dailyPrice} />
		</CoinChart>
	);
};

export default CoinDetailsChart;
