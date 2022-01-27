const initialState = {
	isLoading: false,
	hasError: false,
	coinData: [],
};

export default function searchReducer(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "RESULTS_FETCH_ALL_DATA_SUCCESS":
			return {
				...state,
				coinData: action.payload,
				isLoading: false,
				hasError: false,
			};
		case "RESULTS_FETCH_ALL_DATA_PENDING":
			return {
				...state,
				coinData: [],
				isLoading: true,
				hasError: false,
			};
		case "RESULTS_FETCH_ALL_DATA_ERROR":
			return {
				...state,
				hasError: true,
				coinData: [],
				isLoading: false,
			};
	}
	return state;
}
