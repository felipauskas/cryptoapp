import React, { Component } from "react";
import NavBarSearch from "../NavBarSearch";
import {
	ActionsDiv,
	Option,
	CurrencyDiv,
	Dropdown,
	MenuItem,
	NavDiv,
	NavItems,
	PagesDiv,
	SearchDiv,
	ThemeConverter,
	Dollar,
	StyledLink,
	StyledSearch,
} from "./styles";

export default class NavBar extends Component {
	state = {};

	handleChange = (e) => {
		const currency = e.target.value;
		this.props.handleChange(currency);
	};

	render() {
		return (
			<NavDiv>
				<NavItems>
					<PagesDiv>
						<MenuItem>
							<StyledLink to="/">Coins</StyledLink>
						</MenuItem>
						<MenuItem>
							<StyledLink to="/portfolio">Portfolio</StyledLink>
						</MenuItem>
					</PagesDiv>
					<ActionsDiv>
						<SearchDiv>
							<StyledSearch />
							<NavBarSearch />
						</SearchDiv>
						<CurrencyDiv>
							<Dollar>$</Dollar>
							<Dropdown onChange={this.handleChange}>
								<Option>USD</Option>
								<Option>BTC</Option>
							</Dropdown>
						</CurrencyDiv>
						<ThemeConverter></ThemeConverter>
					</ActionsDiv>
				</NavItems>
			</NavDiv>
		);
	}
}
