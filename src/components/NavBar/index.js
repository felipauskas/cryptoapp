import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
} from "./styles";

const NavBar = () => {
	const dispatch = useDispatch();
	const [currency, setCurrency] = useState("usd");

	const handleClick = (e) => {
		setCurrency(e.key);
		dispatch(handleCurrency(e.key));
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
	);
};

export default NavBar;
