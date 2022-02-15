import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderTableData } from "store/tableData/tableActions";
import { useViewport } from "utils";
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
	const { width } = useViewport();
	const breakpoint = 769;

	const handleClick = (e) => {
		const value = e.target.innerText;
		dispatch(orderTableData({ by: value, asc: !asc }));
	};

	return (
		<TableName>
			<Rank onClick={handleClick}>#</Rank>
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
