import axios from "axios";

export const getTableData = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: "TABLE_FETCH_ALL_DATA_PENDING",
		});
		const { data } = await axios(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
				getState().currency.currency
			}&order=market_cap_desc&per_page=8&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
		);
		dispatch({
			type: "TABLE_FETCH_ALL_DATA_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "TABLE_FETCH_ALL_DATA_ERROR",
			payload: error,
		});
	}
};
