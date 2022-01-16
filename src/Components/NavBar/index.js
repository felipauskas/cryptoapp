import React, { Component } from 'react'
import { ActionsDiv, Option, CurrencyDiv, Dropdown, MenuItem, NavDiv, NavItems, PagesDiv, SearchBar, SearchDiv, ThemeConverter, Dollar, StyledLink } from './styles'

export default class NavBar extends Component {
    render() {
        return (
            <NavDiv>
                <NavItems>
                    <PagesDiv>
                        <MenuItem>
                            <StyledLink to="/coins">Coins</StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink to="/portfolio">Portfolio</StyledLink>
                        </MenuItem>
                    </PagesDiv>
                    <ActionsDiv>
                        <SearchDiv>
                            <SearchBar type="search" placeholder="Search..."/>
                        </SearchDiv>
                        <CurrencyDiv>
                            <Dollar>$</Dollar>
                            <Dropdown>
                                <Option>USD</Option>
                                <Option>BTC</Option>
                            </Dropdown>
                        </CurrencyDiv>
                        <ThemeConverter>
                        </ThemeConverter>
                    </ActionsDiv>
                </NavItems>
            </NavDiv>
        )
    }
}

