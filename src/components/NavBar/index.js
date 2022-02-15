import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { handleCurrency } from "store/currency/currencyActions";
import NavBarSearch from "../NavBarSearch";
import {
	ActionsDiv,
	CurrencyDiv,
	NavDiv,
	NavItems,
	PagesDiv,
	SearchDiv,
	ThemeConverter,
	Dollar,
	StyledLink,
	StyledSearch,
	ArrowDown,
	Option,
	StyledDropdown,
	Overview,
	NavMobile,
	OverviewSVG,
	PortfolioSVG,
	IconTitle,
	IconDiv,
	SearchContainer,
	TitleDiv,
	CloseSVG,
	CloseTitle,
	SearchSVG,
} from "./styles";
import ReactModal from "react-modal";
import { useViewport } from "utils";
import { smallConfig } from "./utils";

export default function NavBar() {
	const dispatch = useDispatch();
	const [currency, setCurrency] = useState("usd");
	const history = useHistory();
	const { width } = useViewport();
	const breakpoint = 769;
	const location = useLocation();
	const [showSearch, setSearch] = useState(false);

	const handleClick = (e) => {
		setCurrency(e.key);
		dispatch(handleCurrency(e.key));
	};

	const handleSearch = () => {
		setSearch(!showSearch);
	};

	const currentPage = () => {
		if (showSearch) {
			return "/search";
		} else {
			return location.pathname;
		}
	};

	const menu = (
		<Menu>
			<Menu.Item key="usd" onClick={handleClick}>
				USD
			</Menu.Item>
			<Menu.Item key="eur" onClick={handleClick}>
				EUR
			</Menu.Item>
			<Menu.Item key="btc" onClick={handleClick}>
				BTC
			</Menu.Item>
		</Menu>
	);

	return (
		<>
			{width > breakpoint && (
				<NavDiv>
					<NavItems>
						<PagesDiv>
							<StyledLink activeClassName="currentPage" exact to="/">
								Coins
							</StyledLink>
							<StyledLink activeClassName="currentPage" exact to="/portfolio">
								Portfolio
							</StyledLink>
						</PagesDiv>
						<ActionsDiv>
							<SearchDiv>
								<StyledSearch />
								<NavBarSearch />
							</SearchDiv>
							<CurrencyDiv>
								<Dollar>$</Dollar>
								<StyledDropdown overlay={menu} trigger={["click"]} placement="bottomLeft" arrow>
									<Option>{currency.toUpperCase()}</Option>
								</StyledDropdown>
								<ArrowDown />
							</CurrencyDiv>
							<ThemeConverter></ThemeConverter>
						</ActionsDiv>
					</NavItems>
				</NavDiv>
			)}
			{width < breakpoint && (
				<>
					<NavDiv>
						<NavItems>
							<ActionsDiv>
								<Overview>Overview</Overview>
								<CurrencyDiv>
									<Dollar>$</Dollar>
									<StyledDropdown overlay={menu} trigger={["click"]} placement="bottomLeft" arrow>
										<Option>{currency.toUpperCase()}</Option>
									</StyledDropdown>
									<ArrowDown />
								</CurrencyDiv>
							</ActionsDiv>
						</NavItems>
					</NavDiv>
					<NavMobile>
						<ReactModal ariaHideApp={false} isOpen={showSearch} style={smallConfig}>
							<SearchContainer>
								<TitleDiv onClick={handleSearch}>
									<CloseSVG />
									<CloseTitle>Close</CloseTitle>
								</TitleDiv>
								<SearchDiv>
									<StyledSearch />
									<NavBarSearch close={handleSearch} />
								</SearchDiv>
							</SearchContainer>
						</ReactModal>
						<IconDiv onClick={() => history.push(`/`)}>
							<OverviewSVG page={currentPage()} />
							<IconTitle page={currentPage}>Overview</IconTitle>
						</IconDiv>
						<IconDiv onClick={() => history.push(`/portfolio`)}>
							<PortfolioSVG page={currentPage()} />
							<IconTitle>Portfolio</IconTitle>
						</IconDiv>
						<IconDiv onClick={handleSearch}>
							<SearchSVG page={currentPage()} />
							<IconTitle>Search</IconTitle>
						</IconDiv>
					</NavMobile>
				</>
			)}
		</>
	);
}
