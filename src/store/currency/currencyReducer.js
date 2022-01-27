const initialState = {
	currency: "usd",
};

export default function handleCurrency(state = initialState, action) {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "CHANGE_CURRENCY":
			return {
				...state,
				currency: action.payload,
			};
	}
	return state;
}
