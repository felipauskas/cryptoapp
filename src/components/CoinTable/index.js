import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTableData } from "store/tableData/tableActions";
import { TableDiv } from "./styles";
import CoinTableTitle from "../CoinTableTitle";
import CoinTableData from "../CoinTableData";

const CoinTable = (props) => {
	const dispatch = useDispatch();
	const { currency } = useSelector((state) => state.currency);
	const { coinData } = useSelector((state) => state.table);

	useEffect(() => {
		dispatch(getTableData(currency));
	}, [currency]);

	return (
		<TableDiv>
			<CoinTableTitle />
			{coinData.map((element) => (
				<CoinTableData
					key={element.market_cap_rank}
					{...element}
					hourchange={element.price_change_percentage_1h_in_currency}
					daychange={element.price_change_percentage_24h_in_currency}
					weekchange={element.price_change_percentage_7d_in_currency}
				/>
			))}
		</TableDiv>
	);
};

export default CoinTable;
