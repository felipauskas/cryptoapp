import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoin } from "store/coinDetails/detailsActions";
import { convertToMoney } from "utils";
import * as dayjs from "dayjs";
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
import CoinConverter from "components/CoinDetailsConverter";
import { useViewport } from "utils";

const CoinDetailsData = (props) => {
	const dispatch = useDispatch();
	const { width } = useViewport();
	const breakpoint = 769;
	const { currency } = useSelector((state) => state.currency);
	const { coinData, hasData } = useSelector((state) => state.coinDetails);
	const { image, name, market_data, links, description, symbol, id } = Object(coinData);
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

	useEffect(() => {
		dispatch(getCoin(props.coin));
	}, [props.coin, currency]);

	return (
		<>
			{hasData && (
				<>
					<Description>Your Summary</Description>
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
							<Price>${convertToMoney.format(current_price[currency])}</Price>
							<LayerSVG />
							<AllTime>All Time High: ${convertToMoney.format(ath[currency])}</AllTime>
							<Date>{dayjs(ath_date[currency]).format("ddd, DD MMM YYYY hh:mm:ss Z")}</Date>
							<AllTime>All Time Low: ${convertToMoney.format(atl[currency])}</AllTime>
							<Date>{dayjs(atl_date[currency]).format("ddd, DD MMM YYYY hh:mm:ss Z")}</Date>
						</PriceDiv>
						<MarketDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Market Cap: </Title>
								<Details>${convertToMoney.format(market_cap[currency])}</Details>
							</DetailsDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Fully Diluted Valudation:</Title>
								<Details>${convertToMoney.format(fully_diluted_valuation[currency])}</Details>
							</DetailsDiv>
							<DetailsDiv>
								<PlusSVG />
								<Title>Volume 24h:</Title>
								<Details>${convertToMoney.format(market_cap_change_24h)}</Details>
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
							<Description>Description</Description>
							<DescriptionContainer>
								<LayerSVG />
								<CoinDescription dangerouslySetInnerHTML={{ __html: description.en }} />
							</DescriptionContainer>
							<SiteContainer>
								<BoxDiv>
									<LinkSVG />
									<SiteName>{links.blockchain_site[0]}</SiteName>
									<GroupSVG />
								</BoxDiv>
								<BoxDiv>
									<LinkSVG />
									<SiteName>{links.blockchain_site[1]}</SiteName>
									<GroupSVG />
								</BoxDiv>
								<BoxDiv>
									<LinkSVG />
									<SiteName>{links.blockchain_site[2]}</SiteName>
									<GroupSVG />
								</BoxDiv>
							</SiteContainer>
							<CoinConverter
								amount={current_price[currency]}
								currency={currency}
								coin={symbol}
								name={id}
							/>
						</>
					)}
				</>
			)}
		</>
	);
};

export default CoinDetailsData;
