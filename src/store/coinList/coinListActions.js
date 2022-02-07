import axios from "axios";

export const getCoinList = () => async (dispatch) => {
	try {
		dispatch({
			type: "COINLIST_FETCH_ALL_DATA_PENDING",
		});
		const { data } = await axios(`https://api.coingecko.com/api/v3/coins/list`);
		dispatch({
			type: "COINLIST_FETCH_ALL_DATA_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "COINLIST_FETCH_ALL_DATA_ERROR",
			payload: error,
		});
	}
};
