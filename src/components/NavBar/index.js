import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
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
} from "./styles";
import { useViewport } from "utils";

export default function NavBar() {
	const dispatch = useDispatch();
	const [currency, setCurrency] = useState("usd");
	const history = useHistory();
	const { width } = useViewport();
	const breakpoint = 769;
	const location = useLocation();

	const handleClick = (e) => {
		setCurrency(e.key);
		dispatch(handleCurrency(e.key));
	};

	const currentPage = location.pathname;

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
						<IconDiv onClick={() => history.push(`/`)}>
							<OverviewSVG page={currentPage} />
							<IconTitle page={currentPage}>Overview</IconTitle>
						</IconDiv>
						<IconDiv onClick={() => history.push(`/portfolio`)}>
							<PortfolioSVG page={currentPage} />
							<IconTitle>Portfolio</IconTitle>
						</IconDiv>
						<IconDiv>
							<StyledSearch />
							<IconTitle>Search</IconTitle>
						</IconDiv>
					</NavMobile>
				</>
			)}
		</>
	);
}
