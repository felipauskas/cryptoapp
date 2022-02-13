import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "antd";
import { getCoin } from "store/coinDetails/detailsActions";
import {
	ImageDiv,
	ImgCoinDiv,
	SelectContainer,
	CoinDiv,
	SelectTitle,
	SelectDiv,
	SelectCoin,
	StyledComplete,
	StyledOption,
	SelectAmount,
	Buttons,
	CloseBtn,
	SaveBtn,
	StyledDate,
	CoinName,
} from "./styles";
import { addCoinPortfolio } from "store/portfolio/portfolioActions";
import moment from "moment";

export default function AddAsset(props) {
	const { close } = props;
	const { coinList } = useSelector((state) => state.coinList);
	const { coinData } = useSelector((state) => state.coinDetails);
	const { currency } = useSelector((state) => state.currency);
	const [filteredCoins, setFiltered] = useState([]);
	const [amountPurchased, setAmount] = useState([]);
	const [inputValue, setInput] = useState("");
	const [datePurchased, setDate] = useState([]);
	const [coinPurchased, setCoin] = useState([]);
	const placeholderVar = `Amount ${currency.toUpperCase()}`;
	const dispatch = useDispatch();
	const { image, name } = Object(coinData);
	const dateFormat = "DD-MM-YYYY";
	const customDateFormat = (value) => `${value.format(dateFormat)}`;

	const handleSearch = (value) => {
		setInput(value);
		if (value.length > 3) {
			const filteredList = coinList.filter((coin) => coin.id.startsWith(value.toLowerCase()));
			const shortList = filteredList.slice(0, 5);
			setFiltered(shortList);
		} else {
			setFiltered([]);
		}
	};

	const handleSelect = (value, option) => {
		setCoin(option.id);
		dispatch(getCoin(option.id));
	};

	const handleAmount = (e) => {
		const amount = e.target.value;
		const isNotNumber = isNaN(amount);
		const nextValue = isNotNumber ? "" : amount;
		setAmount(nextValue);
	};

	const handleDate = (date, dateString) => {
		setDate(dateString);
	};

	const handleSave = () => {
		if (name) {
			dispatch(addCoinPortfolio(coinPurchased, datePurchased, amountPurchased, currency));
			close();
		}
	};

	const disabledDate = (current) => {
		const today = moment().format("DD-MM-YYYY");
		const tomorrow = moment(today, "DD-MM-YYYY").add(1, "days");
		return current && current > moment(tomorrow, "DD-MM-YYYY");
	};

	const coinResults = filteredCoins.map((coin) => (
		<StyledOption key={coin.id} value={coin.name} id={coin.id}>
			{coin.name}
		</StyledOption>
	));

	return (
		<SelectContainer>
			<SelectTitle>Select Coins</SelectTitle>
			<CoinDiv>
				<ImgCoinDiv>
					{image && (
						<>
							<ImageDiv>
								<img src={image.small} alt={name}></img>
							</ImageDiv>
							<CoinName>{name}</CoinName>
						</>
					)}
				</ImgCoinDiv>
				<SelectDiv>
					<StyledComplete onSearch={handleSearch} dataSource={coinResults} onSelect={handleSelect}>
						<SelectCoin placeholder="Search Coin" value={inputValue} />
					</StyledComplete>
					<SelectAmount
						placeholder={placeholderVar}
						onChange={handleAmount}
						value={amountPurchased}
					></SelectAmount>
					<Space direction="vertical" size={50}>
						<StyledDate
							disabledDate={disabledDate}
							format={customDateFormat}
							placeholder="Select Date"
							allowClear={false}
							suffixIcon={null}
							onChange={handleDate}
						/>
					</Space>
				</SelectDiv>
				<Buttons>
					<CloseBtn onClick={close}>Close</CloseBtn>
					<SaveBtn onClick={handleSave}>Save</SaveBtn>
				</Buttons>
			</CoinDiv>
		</SelectContainer>
	);
}
