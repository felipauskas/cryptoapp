import axios from "axios";

const maxBigInt = 9007199254740991;

export const getTableData = (results, page, currency) => async (dispatch) => {
	try {
		dispatch({
			type: "TABLE_FETCH_ALL_DATA_PENDING",
		});
		const { data } = await axios(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${results}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
		);
		const coinData = data.filter(
			(element) =>
				element.circulating_supply < maxBigInt ||
				element.total_supply < maxBigInt ||
				element.total_volume < maxBigInt ||
				element.market_cap < maxBigInt
		);
		dispatch({
			type: "TABLE_FETCH_ALL_DATA_SUCCESS",
			payload: coinData,
		});
		if (data.length < 1) {
			dispatch({
				type: "TABLE_FETCH_ALL_DATA_FULL",
			});
		}
	} catch (error) {
		dispatch({
			type: "TABLE_FETCH_ALL_DATA_ERROR",
			payload: error,
		});
	}
};

export const orderTableData = (orderBy) => (dispatch) => {
	dispatch({
		type: "TABLE_ORDER_BY",
		payload: orderBy,
	});
};

export const cleanTableData = (config) => (dispatch) => {
	dispatch({
		type: "TABLE_EMPTY_DATA",
	});
	if (config) {
		const { results, page, currency } = config;
		dispatch(getTableData(results, page, currency));
	}
};
