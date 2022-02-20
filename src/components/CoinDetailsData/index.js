import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormat, useViewport } from "utils";
import { CoinConverter } from "components";
import * as dayjs from "dayjs";
import { getCoin } from "store/coinDetails/detailsActions";
import {
	AllTime,
	CoinName,
	Container,
	Date,
	IconDiv,
	ImageContainer,
	ImageDiv,
	LayerSVG,
	MarketDiv,
	Price,
	PriceDiv,
	SiteDiv,
	SiteName,
	Title,
	Details,
	PlusSVG,
	DetailsDiv,
	Description,
	DescriptionContainer,
	CoinDescription,
	BoxDiv,
	SiteContainer,
	LinkSVG,
	GroupSVG,
} from "./styles";

const CoinDetailsData = (props) => {
	const dispatch = useDispatch();
	const { width } = useViewport();
	const breakpoint = 769;
	const { currency } = useSelector((state) => state.currency);
	const { coinData, hasData } = useSelector((state) => state.coinDetails);
	const { image, name, market_data, links, description, symbol, id } = Object(coinData);
	const [isCopied, setCopy] = useState("");
	const {
		current_price,
		ath,
		atl,
		atl_date,
		ath_date,
		market_cap,
		fully_diluted_valuation,
		total_volume,
		max_supply,
		circulating_supply,
		market_cap_change_24h,
		market_cap_change_percentage_24h,
	} = Object(market_data);
	const { blockchain_site } = Object(links);

	useEffect(() => {
		dispatch(getCoin(props.coin));
	}, [props.coin, currency]);

	const onCopy = (e) => {
		setCopy(e.target.id);
		copyToClipboard(e.target.id);
		setTimeout(() => {
			setCopy(false);
		}, 2000);
	};

	const copyToClipboard = async (text) => {
		if ("clipboard" in navigator) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand("copy", true, text);
		}
	};

	// const openTab = (e) => {
	// 	const url = e.target.id;
	// 	window.open(url, "_blank");
	// 	// IT DOESN'T WORK IN SOME CASES.
	// };

	return (
		<>
			{hasData && (
				<>
					<Description>YOUR SUMMARY</Description>
					<Container>
						<ImageContainer>
							<ImageDiv>
								<IconDiv>
									<img src={image.small} alt={name} />
								</IconDiv>
								<CoinName>{name}</CoinName>
							</ImageDiv>
							<SiteDiv>
								<SiteName>{links.homepage[0]}</SiteName>
							</SiteDiv>
						</ImageContainer>
						<PriceDiv>
							<Price>{currencyFormat(currency, 2, current_price[currency])}</Price>
							<LayerSVG />
							<AllTime>All Time High: {currencyFormat(currency, 0, ath[currency])}</AllTime>
							<Date>{dayjs(ath_date[currency]).format("ddd, DD MMM YYYY hh:mm:ss Z")}</Date>
							<AllTime>All Time Low: {currencyFormat(currency, 0, atl[currency])}</AllTime>
							<Date>{dayjs(atl_date[currency]).format("ddd, DD MMM YYYY hh:mm:ss Z")}</Date>
						</PriceDiv>
						<MarketDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Market Cap: </Title>
								<Details>{currencyFormat(currency, 0, market_cap[currency])}</Details>
							</DetailsDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Fully Diluted Valudation:</Title>
								<Details>{currencyFormat(currency, 0, fully_diluted_valuation[currency])}</Details>
							</DetailsDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Volume 24h:</Title>
								<Details>{currencyFormat(currency, 0, market_cap_change_24h)}</Details>
							</DetailsDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Volume / Market:</Title>
								<Details>{market_cap_change_percentage_24h}</Details>
							</DetailsDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Total Volume:</Title>
								<Details>{total_volume[currency]}</Details>
							</DetailsDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Max Supply:</Title>
								<Details>{max_supply}</Details>
							</DetailsDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Circulating Supply:</Title>
								<Details>{circulating_supply}</Details>
							</DetailsDiv>
						</MarketDiv>
					</Container>
					{width > breakpoint && (
						<>
							<Description>DESCRIPTION</Description>
							<DescriptionContainer>
								<LayerSVG />
								<CoinDescription dangerouslySetInnerHTML={{ __html: description.en }} />
							</DescriptionContainer>
							<SiteContainer>
								<BoxDiv>
									<a href={blockchain_site[0]} target="_blank">
										<LinkSVG />
									</a>
									<SiteName>{isCopied === blockchain_site[0] ? "Copied" : blockchain_site[0]}</SiteName>
									<GroupSVG onClick={onCopy} id={blockchain_site[0]} current={isCopied} />
								</BoxDiv>
								<BoxDiv>
									<a href={blockchain_site[1]} target="_blank">
										<LinkSVG />
									</a>
									<SiteName>{isCopied === blockchain_site[1] ? "Copied" : blockchain_site[1]}</SiteName>
									<GroupSVG onClick={onCopy} id={blockchain_site[1]} current={isCopied} />
								</BoxDiv>
								<BoxDiv>
									<a href={blockchain_site[2]} target="_blank">
										<LinkSVG />
									</a>
									<SiteName>{isCopied === blockchain_site[2] ? "Copied" : blockchain_site[2]}</SiteName>
									<GroupSVG onClick={onCopy} id={blockchain_site[2]} current={isCopied} />
								</BoxDiv>
							</SiteContainer>
							<CoinConverter amount={current_price[currency]} currency={currency} coin={symbol} name={id} />
						</>
					)}
				</>
			)}
		</>
	);
};

export default CoinDetailsData;
