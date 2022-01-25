import React, { useEffect, useState } from "react";
import axios from "axios";
import { TableDiv } from "./styles";
import CoinTableTitle from "../CoinTableTitle";
import CoinTableData from "../CoinTableData";

const CoinTable = (props) => {
	const [isLoading, setLoading] = useState(false);
	const [hasError, setError] = useState(false);
	const [hasData, setData] = useState(false);
	const [coinData, setCoinData] = useState([]);

	const getData = async (currency) => {
		setError(false);
		setLoading(true);
		setData(false);
		try {
			const { data } = await axios(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=8&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
			);
			setLoading(false);
			setData(true);
			setCoinData(data);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setData(false);
			setError(true);
		}
	};

	useEffect(() => {
		getData(props.currency);
	}, [props.currency]);

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

export default CoinTable;
