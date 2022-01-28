import axios from "axios";

export const getChartData = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: "CHART_FETCH_ALL_DATA_PENDING",
		});
		const { data } = await axios(
			`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${
				getState().currency.currency
			}&days=30&interval=daily`
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
		const payloadData = {
			data: data,
			dateLabels: dateLabels,
			dailyPrice: dailyPrice,
			totalVolumes: totalVolumes,
		};
		dispatch({
			type: "CHART_FETCH_ALL_DATA_SUCCESS",
			payload: payloadData,
		});
	} catch (error) {
		dispatch({
			type: "CHART_FETCH_ALL_DATA_ERROR",
		});
	}
};
