const initialState = {
	isLoading: false,
	hasError: false,
	marketData: [],
	hasData: false,
};

export default function marketReducer(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "MARKET_FETCH_ALL_DATA_SUCCESS":
			return {
				...state,
				marketData: action.payload,
				hasError: false,
				hasData: true,
				isLoading: false,
			};
		case "MARKET_FETCH_ALL_DATA_PENDING":
			return {
				...state,
				marketData: [],
				hasError: false,
				hasData: false,
				isLoading: true,
			};
		case "MARKET_FETCH_ALL_DATA_ERROR":
			return {
				...state,
				marketData: [],
				hasError: true,
				hasData: false,
				isLoading: false,
			};
	}
	return state;
}
