import React from "react";
import { useDispatch } from "react-redux";
import { handleCurrency } from "store/currency/currencyActions";
import NavBarSearch from "../NavBarSearch";
import {
	ActionsDiv,
	Option,
	CurrencyDiv,
	Dropdown,
	NavDiv,
	NavItems,
	PagesDiv,
	SearchDiv,
	ThemeConverter,
	Dollar,
	StyledLink,
	StyledSearch,
} from "./styles";

const NavBar = () => {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const currency = e.target.value;
		dispatch(handleCurrency(currency.toLowerCase()));
	};

	return (
		<NavDiv>
			<NavItems>
				<PagesDiv>
					<StyledLink activeClassName="someClass" exact to="/">
						Coins
					</StyledLink>
					<StyledLink activeClassName="someClass" exact to="/portfolio">
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
						<Dropdown onChange={handleChange}>
							<Option>USD</Option>
							<Option>BTC</Option>
							<Option>EUR</Option>
						</Dropdown>
					</CurrencyDiv>
					<ThemeConverter></ThemeConverter>
				</ActionsDiv>
			</NavItems>
		</NavDiv>
	);
};

export default NavBar;
