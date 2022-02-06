const initialState = {
	coins: [],
	currentPrice: [],
};

export default function portfolioCoins(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "ADD_COIN":
			return {
				...state,
				coins: [action.payload, ...state.coins],
			};
		case "PORTFOLIO_FETCH_ALL_DATA_SUCCESS":
			return {
				...state,
				currentPrice: action.payload,
			};
	}
	return state;
}
