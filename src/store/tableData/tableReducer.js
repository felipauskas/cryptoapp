const initialState = {
	isLoading: false,
	hasError: false,
	hasData: false,
	coinData: [],
};

export default function tableReducer(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "TABLE_FETCH_ALL_DATA_SUCCESS":
			return {
				...state,
				hasData: true,
				coinData: action.payload,
				isLoading: false,
				hasError: false,
			};
		case "TABLE_FETCH_ALL_DATA_PENDING":
			return {
				...state,
				hasData: false,
				isLoading: true,
				hasError: false,
			};
		case "TABLE_FETCH_ALL_DATA_ERROR":
			return {
				...state,
				hasError: true,
				hasData: false,
				isLoading: false,
			};
	}
	return state;
}
