import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOutsideClick from "../../utils/useOutsideClick";
import { getCoin } from "store/coinDetails/detailsActions";
import {
	ImageDiv,
	ImgCoinDiv,
	SelectContainer,
	CoinDiv,
	SelectTitle,
	SelectDiv,
	SelectCoin,
	SelectAmount,
	Buttons,
	CloseBtn,
	SaveBtn,
	SelectDate,
	CoinResultDiv,
	CoinResult,
	CoinName,
} from "./styles";
import { addCoinPortfolio } from "store/portfolio/portfolioActions";

export default function AddAsset(props) {
	const { close } = props;
	const { coinList } = useSelector((state) => state.coinList);
	const { coinData } = useSelector((state) => state.coinDetails);
	const { currency } = useSelector((state) => state.currency);
	const [filteredCoins, setFiltered] = useState([]);
	const [isOpen, setOpen] = useState(false);
	const [amountPurchased, setAmount] = useState([]);
	const [datePurchased, setDate] = useState([]);
	const [coinPurchased, setCoin] = useState([]);
	const placeholderVar = `Amount ${currency.toUpperCase()}`;
	const ref = useRef();
	const dispatch = useDispatch();
	const { image, name } = Object(coinData);

	useOutsideClick(ref, () => {
		if (isOpen) setOpen(false);
	});

	const handleCoin = (e) => {
		if (e.target.value.length > 3) {
			setOpen(true);
			const filteredList = coinList.filter((coin) =>
				coin.id.startsWith(e.target.value.toLowerCase())
			);
			const shortList = filteredList.slice(0, 5);
			setFiltered(shortList);
		} else {
			setOpen(false);
		}
		setCoin(e.target.value);
	};

	const handleAmount = (e) => {
		const amount = e.target.value;
		const isNotNumber = isNaN(amount);
		const nextValue = isNotNumber ? "" : amount;
		setAmount(nextValue);
	};

	const handleDate = (e) => {
		const date = e.target.value;
		setDate(date);
	};

	const handleClick = (e) => {
		setCoin(e.target.id);
		setOpen(false);
		dispatch(getCoin(e.target.id));
	};

	const handleSave = () => {
		dispatch(addCoinPortfolio(coinPurchased, datePurchased, amountPurchased, currency));
		close();
	};

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
					<SelectCoin placeholder="Search Coin" onChange={handleCoin} value={coinPurchased} />
					<CoinResultDiv ref={ref}>
						{isOpen &&
							filteredCoins.map((coin) => (
								<CoinResult onClick={handleClick} key={coin.name} id={coin.id}>
									<span id={coin.id}>{coin.name}</span>
								</CoinResult>
							))}
					</CoinResultDiv>
					<SelectAmount
						placeholder={placeholderVar}
						onChange={handleAmount}
						value={amountPurchased}
					></SelectAmount>
					<SelectDate placeholder="DD-MM-YYYY" onChange={handleDate}></SelectDate>
				</SelectDiv>
				<Buttons>
					<CloseBtn onClick={close}>Close</CloseBtn>
					<SaveBtn onClick={handleSave}>Save</SaveBtn>
				</Buttons>
			</CoinDiv>
		</SelectContainer>
	);
}
