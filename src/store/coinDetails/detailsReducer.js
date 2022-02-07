const initialState = {
	isLoading: false,
	hasError: false,
	hasData: false,
	coinData: null,
};

export default function detailsReducer(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "COINDETAILS_FETCH_ALL_DATA_SUCCESS":
			return {
				...state,
				coinData: action.payload,
				isLoading: false,
				hasData: true,
				hasError: false,
			};
		case "COINDETAILS_FETCH_ALL_DATA_PENDING":
			return {
				...state,
				coinData: [],
				isLoading: true,
				hasData: false,
				hasError: false,
			};
		case "COINDETAILS_FETCH_ALL_DATA_ERROR":
			return {
				...state,
				hasError: true,
				coinData: null,
				hasData: false,
				isLoading: false,
			};
		case "COINDETAILS_CLEAN_ALL_DATA_SUCCESS":
			return {
				initialState,
			};
	}
	return state;
}
