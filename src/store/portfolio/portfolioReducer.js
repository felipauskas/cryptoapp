const initialState = {
	coins: [],
};

export default function portfolioCoins(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "ADD_COIN":
			return {
				...state,
				coins: [action.payload, ...state.coins],
			};
		case "UPDATE_COIN":
			const index = state.coins.findIndex((element) => element.coinName === action.coinName);
			const updatedArray = [...state.coins];
			updatedArray[index].coinInformation.actualData = action.payload;
			return {
				...state,
				coins: updatedArray,
			};
	}
	return state;
}
