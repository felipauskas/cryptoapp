const initialState = {
	isLoading: false,
	hasError: false,
	coinList: null,
	hasData: false,
};

export default function coinListReducer(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "COINLIST_FETCH_ALL_DATA_SUCCESS":
			return {
				...state,
				coinList: action.payload,
				isLoading: false,
				hasError: false,
				hasData: true,
			};
		case "COINLIST_FETCH_ALL_DATA_PENDING":
			return {
				...state,
				coinList: null,
				isLoading: true,
				hasError: false,
			};
		case "COINLIST_FETCH_ALL_DATA_ERROR":
			return {
				...state,
				hasError: true,
				isLoading: false,
				coinList: null,
			};
	}
	return state;
}
