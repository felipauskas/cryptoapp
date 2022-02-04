import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { cleanTableData, getTableData } from "store/tableData/tableActions";
import { TableDiv } from "./styles";
import CoinTableTitle from "../CoinTableTitle";
import CoinTableData from "../CoinTableData";

const CoinTable = (props) => {
	const dispatch = useDispatch();
	const { currency } = useSelector((state) => state.currency);
	const { coinData, hasMore, orderBy } = useSelector((state) => state.table);
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

	// Leaving this comment just to point out that I've started working in the sort but haven't progress it yet.
	let showedList = [...coinData];

	if (orderBy === "price") {
		showedList = showedList.sort((a, b) => (b.current_price > a.current_price ? 1 : -1));
	}

	return (
		<TableDiv>
			<CoinTableTitle />
			<InfiniteScroll dataLength={coinData.length} next={fetchMoreData} hasMore={hasMore}>
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
