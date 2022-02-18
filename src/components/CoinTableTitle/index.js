import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useViewport } from "utils";
import { orderTableData } from "store/tableData/tableActions";
import { Name, Rank, Hour, Price, Day, Week, VolumeMarket, CirculatingSupply, Last7d, TableName } from "./styles";

const CoinTableTitle = (props) => {
	const dispatch = useDispatch();
	const { asc } = useSelector((state) => state.table.order);
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
		history.push({
			pathname: window.location.pathname,
			search: `?orderBy=${value}&ascending=${!asc}&results=${coinResults}`,
		});
		dispatch(orderTableData({ by: value, asc: !asc }));
	};

	return (
		<TableName>
			<Rank onClick={handleClick}>ID</Rank>
			<Name>Name</Name>
			<Price onClick={handleClick}>Price</Price>
			<Hour onClick={handleClick}>1H%</Hour>
			<Day onClick={handleClick}>1D%</Day>
			<Week onClick={handleClick}>7D%</Week>
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
