const initialState = {
	isLoading: false,
	hasError: false,
	hasData: false,
	dateLabels: [],
	dailyPrice: [],
	totalVolumes: [],
};

export default function chartReducer(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "CHART_FETCH_ALL_DATA_SUCCESS":
			return {
				...state,
				hasData: true,
				dateLabels: action.payload.dateLabels,
				dailyPrice: action.payload.dailyPrice,
				totalVolumes: action.payload.totalVolumes,
				isLoading: false,
				hasError: false,
			};
		case "CHART_FETCH_ALL_DATA_PENDING":
			return {
				...state,
				hasData: false,
				isLoading: true,
				hasError: false,
			};
		case "CHART_FETCH_ALL_DATA_ERROR":
			return {
				...state,
				hasError: true,
				hasData: false,
				isLoading: false,
			};
	}
	return state;
}
