import axios from "axios";

export const getCoin = (coinName) => async (dispatch) => {
	try {
		dispatch({
			type: "COINDETAILS_FETCH_ALL_DATA_PENDING",
		});
		const { data } = await axios(
			`https://api.coingecko.com/api/v3/coins/${coinName}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
		);
		dispatch({
			type: "COINDETAILS_FETCH_ALL_DATA_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "COINDETAILS_FETCH_ALL_DATA_ERROR",
			payload: error,
		});
	}
};
