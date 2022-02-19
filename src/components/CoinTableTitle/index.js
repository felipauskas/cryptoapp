import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useViewport } from "utils";
import { orderTableData } from "store/tableData/tableActions";
import {
	Name,
	Rank,
	Hour,
	Price,
	Day,
	Week,
	VolumeMarket,
	CirculatingSupply,
	Last7d,
	TableName,
	ArrowSVG,
} from "./styles";

const CoinTableTitle = () => {
	const dispatch = useDispatch();
	const { asc, by } = useSelector((state) => state.table.order);
	const queryString = require("query-string");
	const history = useHistory();
	const { width } = useViewport();
	const breakpoint = 769;
	const { orderBy, ascending } = queryString.parse(window.location.search);
	const { coinData } = useSelector((state) => state.table);
	const coinResults = coinData.length;
	const isAscending = ascending === "true";

	useEffect(() => {
		if (orderBy) {
			dispatch(orderTableData({ by: orderBy, asc: isAscending }));
		}
	}, []);

	const handleClick = (e) => {
		const value = e.target.innerText;
		const direction = value === by ? !asc : asc;
		if (value === by) {
			dispatch(orderTableData({ by: value, asc: !asc }));
		} else {
			dispatch(orderTableData({ by: value, asc: asc }));
		}
		history.push({
			pathname: window.location.pathname,
			search: `?orderBy=${value}&ascending=${direction}&results=${coinResults}`,
		});
	};

	return (
		<TableName>
			<Rank onClick={handleClick} id="ID">
				<span>ID</span>
				<ArrowSVG direction={asc} orderBy={by} value="ID" />
			</Rank>
			<Name id="Name">Name</Name>
			<Price onClick={handleClick}>
				<span>Price</span>
				<ArrowSVG direction={asc} orderBy={by} value="Price" />
			</Price>
			<Hour onClick={handleClick}>
				<span>1H%</span>
				<ArrowSVG direction={asc} orderBy={by} value="1H%" />
			</Hour>
			<Day onClick={handleClick}>
				<span>1D%</span>
				<ArrowSVG direction={asc} orderBy={by} value="1D%" />
			</Day>
			<Week onClick={handleClick}>
				<span>7D%</span>
				<ArrowSVG direction={asc} orderBy={by} value="7D%" />
			</Week>
			{width > breakpoint && (
				<>
					<VolumeMarket>24h Volume/Market Cap</VolumeMarket>
					<CirculatingSupply>Circulating/Total Supply</CirculatingSupply>
					<Last7d>Last 7D</Last7d>
				</>
			)}
		</TableName>
	);
};

export default CoinTableTitle;
