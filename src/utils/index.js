import React from "react";

export const currencyFormat = (currency, fraction, value) =>
	new Intl.NumberFormat("us-EN", {
		style: "currency",
		maximumFractionDigits: fraction,
		currency: currency.toUpperCase(),
	}).format(value);

export function dateParsed(date) {
	const newDate = new Date(date);
	return newDate;
}

const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const [height, setHeight] = React.useState(window.innerHeight);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return <viewportContext.Provider value={{ width, height }}>{children}</viewportContext.Provider>;
};

export const useViewport = () => {
	const { width, height } = React.useContext(viewportContext);
	return { width, height };
};
