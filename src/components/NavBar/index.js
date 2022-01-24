import React from "react";
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
		props.handleChange(currency);
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
