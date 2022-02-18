import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { CoinTableTitle, CoinTableData } from "components";
import { cleanTableData, getTableData } from "store/tableData/tableActions";
import { TableDiv } from "./styles";

const CoinTable = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { currency } = useSelector((state) => state.currency);
	const { coinData, hasMore } = useSelector((state) => state.table);
	const { by, asc } = useSelector((state) => state.table.order);
	const queryString = require("query-string");
	const { results } = queryString.parse(window.location.search);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(
			cleanTableData({
				results: results ? results : coinData.length ? coinData.length : "5",
				page: 1,
				currency,
			})
		);
		results > 0 ? setPage(results / 5 + 1) : coinData.length ? setPage(coinData.length / 5 + 1) : setPage(2);
	}, [currency]);

	useEffect(() => {
		return function cleanCoinTableData() {
			dispatch(cleanTableData());
		};
	}, []);

	const fetchMoreData = () => {
		dispatch(getTableData("5", page, currency));
		setPage(page + 1);
		history.push({
			pathname: window.location.pathname,
			search: `?orderBy=${by}&ascending=${asc}&results=${coinData.length}`,
		});
	};

	const showedList = [...coinData];

	const sortObject = {
		ID: "market_cap_rank",
		Price: "current_price",
		"1H%": "price_change_percentage_1h_in_currency",
		"1D%": "price_change_percentage_24h_in_currency",
		"7D%": "price_change_percentage_7d_in_currency",
	};

	const sortType = sortObject[by];

	if (sortType && asc) {
		showedList.sort((a, b) => a[sortType] - b[sortType]);
	} else if (sortType && !asc) {
		showedList.sort((a, b) => b[sortType] - a[sortType]);
	}

	return (
		<TableDiv>
			<CoinTableTitle currency={currency} />
			<InfiniteScroll dataLength={showedList.length} next={fetchMoreData} hasMore={hasMore}>
				{showedList.map((element) => (
					<CoinTableData
						key={element.id}
						{...element}
						currency={currency}
						hourchange={element.price_change_percentage_1h_in_currency}
						daychange={element.price_change_percentage_24h_in_currency}
						weekchange={element.price_change_percentage_7d_in_currency}
					/>
				))}
			</InfiniteScroll>
		</TableDiv>
	);
};

export default CoinTable;
