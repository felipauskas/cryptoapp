import axios from "axios";

export const addCoinPortfolio = (coin, date, amount, currency) => async (dispatch) => {
	try {
		dispatch({
			type: "PORTFOLIO_FETCH_COIN_DATA_PENDING",
		});
		const { data } = await axios(
			`https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}`
		);
		dispatch({
			type: "PORTFOLIO_FETCH_COIN_DATA_SUCCESS",
			payload: {
				amountPurchased: amount,
				currencyPurchased: currency,
				datePurchased: date,
				purchasedData: data,
			},
		});
	} catch (error) {
		dispatch({
			type: "PORTFOLIO_FETCH_COIN_DATA_ERROR",
		});
	}
};

export const updateCoinPortfolio = (currency, coins) => async (dispatch) => {
	try {
		dispatch({
			type: "PORTFOLIO_FETCH_ALL_DATA_PENDING",
		});
		const { data } = await axios(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coins}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d`
		);
		dispatch({
			type: "PORTFOLIO_FETCH_ALL_DATA_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "PORTFOLIO_FETCH_ALL_DATA_ERROR",
		});
	}
};
