export const handleCurrency = (currency) => (dispatch) => {
	dispatch({
		type: "CHANGE_CURRENCY",
		payload: currency,
	});
};
