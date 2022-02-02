import React from "react";
import { useDispatch } from "react-redux";
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

const CoinTableTitle = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(orderTableData("price"));
	};

	return (
		<TableName>
			<Rank>#</Rank>
			<Name>Name</Name>
			<Price onClick={handleClick}>Price</Price>
			<Hour>1H%</Hour>
			<Day>1D%</Day>
			<Week>7D%</Week>
			<VolumeMarket>24h Volume/Market Cap</VolumeMarket>
			<CirculatingSupply>Circulating/Total Supply</CirculatingSupply>
			<Last7d>Last 7D</Last7d>
		</TableName>
	);
};

export default CoinTableTitle;
