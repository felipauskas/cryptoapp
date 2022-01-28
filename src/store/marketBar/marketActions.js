import axios from "axios";

export const getMarketData = () => async (dispatch) => {
	try {
		dispatch({
			type: "MARKET_FETCH_ALL_DATA_PENDING",
		});
		const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
		dispatch({
			type: "MARKET_FETCH_ALL_DATA_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "MARKET_FETCH_ALL_DATA_ERROR",
		});
	}
};
