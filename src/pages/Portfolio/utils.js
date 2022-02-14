export const largeConfig = {
	// eslint-disable-next-line{
	overlay: {
		backgroundColor: "rgba(25, 27, 31, 0.5)",
	},
	content: {
		WebkitOverflowScrolling: "touch",
		position: "absolute",
		top: "120px",
		left: "40px",
		right: "40px",
		bottom: "40px",
		backgroundColor: "transparent",
		border: "transparent",
	},
};

export const smallConfig = {
	// eslint-disable-next-line{
	overlay: {
		backgroundColor: "rgba(25, 27, 31, 0.5)",
	},
	content: {
		WebkitOverflowScrolling: "touch",
		position: "absolute",
		top: "0px",
		left: "0px",
		right: "0px",
		bottom: "0px",
		backgroundColor: "transparent",
		border: "transparent",
	},
};

export const coinsPrice = (coinsArray) => {
	let coinString = "";
	coinsArray.map((el) => {
		coinString = coinString += el.purchasedData.id + ",";
	});
	return coinString;
};
