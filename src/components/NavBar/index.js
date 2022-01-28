import React from "react";
import { connect } from "react-redux";
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

const NavBar = (props) => {
	const handleChange = (e) => {
		const currency = e.target.value;
		props.handleCurrency(currency.toLowerCase());
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

const mapStateToProps = (state) => ({
	currency: state.currency,
});

const mapDispatchToProps = {
	handleCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
