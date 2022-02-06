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
	const { coinData, hasMore } = useSelector((state) => state.table);
	const { by, asc } = useSelector((state) => state.table.order);
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

	switch (asc) {
		default:
			break;
		case true:
			switch (by) {
				default:
					break;
				case "#":
					showedList.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
					break;
				case "price":
					showedList.sort((a, b) => a.current_price - b.current_price);
					break;
				case "hour":
					showedList.sort(
						(a, b) =>
							a.price_change_percentage_1h_in_currency - b.price_change_percentage_1h_in_currency
					);
					break;
				case "day":
					showedList.sort(
						(a, b) =>
							a.price_change_percentage_24h_in_currency - b.price_change_percentage_24h_in_currency
					);
			}
			break;
		case false:
			switch (by) {
				default:
					break;
				case "#":
					showedList.sort((a, b) => b.market_cap_rank - a.market_cap_rank);
					break;
				case "price":
					showedList.sort((a, b) => b.current_price - a.current_price);
					break;
				case "hour":
					showedList.sort(
						(a, b) =>
							b.price_change_percentage_1h_in_currency - a.price_change_percentage_1h_in_currency
					);
					break;
				case "day":
					showedList.sort(
						(a, b) =>
							b.price_change_percentage_24h_in_currency - a.price_change_percentage_24h_in_currency
					);
			}
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
