const initialState = {
	isLoading: false,
	hasError: false,
	hasData: false,
	coinData: [],
	hasMore: true,
	orderBy: null,
};

export default function tableReducer(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "TABLE_FETCH_ALL_DATA_SUCCESS":
			return {
				...state,
				hasData: true,
				coinData: state.coinData.concat(action.payload),
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
		case "TABLE_FETCH_ALL_DATA_FULL":
			return {
				...state,
				hasMore: false,
			};
		case "TABLE_ORDER_BY":
			return {
				...state,
				orderBy: action.payload,
			};
		case "TABLE_EMPTY_DATA":
			return {
				...state,
				hasData: false,
				coinData: [],
				orderBy: null,
			};
	}
	return state;
}
