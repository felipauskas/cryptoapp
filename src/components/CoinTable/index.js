import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { cleanTableData, getTableData } from "store/tableData/tableActions";
import { TableDiv } from "./styles";
import CoinTableTitle from "../CoinTableTitle";
import CoinTableData from "../CoinTableData";

const CoinTable = () => {
	const dispatch = useDispatch();
	const { currency } = useSelector((state) => state.currency);
	const { coinData, hasMore } = useSelector((state) => state.table);
	const { order } = useSelector((state) => state.table);
	const { by, asc } = order;
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(
			cleanTableData({
				results: coinData.length ? coinData.length : "5",
				page: 1,
				currency,
			})
		);
		coinData.length ? setPage(coinData.length / 5 + 1) : setPage(2);
	}, [currency]);

	useEffect(() => {
		return function cleanCoinTableData() {
			dispatch(cleanTableData());
		};
	}, []);

	const fetchMoreData = () => {
		dispatch(getTableData("5", page, currency));
		setPage(page + 1);
	};

	const showedList = [...coinData];

	const sortObject = {
		"#": "market_cap_rank",
		Price: "current_price",
		"1H%": "price_change_percentage_1h_in_currency",
		"1D%": "price_change_percentage_24h_in_currency",
		"7D%": "price_change_percentage_7d_in_currency",
	};

	if (Object.keys(sortObject).includes(by) && asc) {
		showedList.sort((a, b) => a[sortObject[by]] - b[sortObject[by]]);
	} else if (Object.keys(sortObject).includes(by) && !asc) {
		showedList.sort((a, b) => b[sortObject[by]] - a[sortObject[by]]);
	}

	return (
		<TableDiv>
			<CoinTableTitle currency={currency} />
			<InfiniteScroll dataLength={showedList.length} next={fetchMoreData} hasMore={hasMore}>
				{showedList.map((element) => (
					<CoinTableData
						key={element.id}
						{...element}
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
