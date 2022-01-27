import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTableData } from "store/tableData/tableActions";
import { TableDiv } from "./styles";
import CoinTableTitle from "../CoinTableTitle";
import CoinTableData from "../CoinTableData";

const CoinTable = (props) => {
	const { currency } = props.currency;

	useEffect(() => {
		props.getTableData(currency);
	}, [currency]);

	const { hasData, coinData } = props.table;

	return (
		<>
			{hasData && (
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
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	table: state.table,
	currency: state.currency,
});

const mapDispatchToProps = {
	getTableData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
