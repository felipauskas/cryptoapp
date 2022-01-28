import axios from "axios";

export const getResultsData = (inputQuery) => async (dispatch) => {
	try {
		dispatch({
			type: "RESULTS_FETCH_ALL_DATA_PENDING",
		});
		const { data } = await axios(`https://crypto-app-server.herokuapp.com/coins/${inputQuery}`);
		dispatch({
			type: "RESULTS_FETCH_ALL_DATA_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "RESULTS_FETCH_ALL_DATA_ERROR",
			payload: error,
		});
	}
};
