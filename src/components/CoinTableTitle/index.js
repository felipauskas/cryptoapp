import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "./styles";

const CoinTableTitle = (props) => {
	const dispatch = useDispatch();
	const { asc } = useSelector((state) => state.table.order);

	const handleClick = (e) => {
		switch (e.target.innerText) {
			default:
				break;
			case "#":
				dispatch(orderTableData({ by: "#", asc: !asc }));
				break;
			case "Price":
				dispatch(orderTableData({ by: "price", asc: !asc }));
				break;
			case "1H%":
				dispatch(orderTableData({ by: "hour", asc: !asc }));
				break;
			case "1D%":
				dispatch(orderTableData({ by: "day", asc: !asc }));
				break;
		}
	};

	return (
		<TableName>
			<Rank onClick={handleClick}>#</Rank>
			<Name>Name</Name>
			<Price onClick={handleClick}>Price</Price>
			<Hour onClick={handleClick}>1H%</Hour>
			<Day onClick={handleClick}>1D%</Day>
			<Week onClick={handleClick}>7D%</Week>
			<VolumeMarket>24h Volume/Market Cap</VolumeMarket>
			<CirculatingSupply>Circulating/Total Supply</CirculatingSupply>
			<Last7d>Last 7D</Last7d>
		</TableName>
	);
};

export default CoinTableTitle;
