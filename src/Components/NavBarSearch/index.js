import React, { Component } from "react";
import axios from "axios";
import { SearchBar, StyledForm } from "./styles";

export default class NavBarSearch extends Component {
	state = {
		coinData: [],
		inputQuery: "",
	};

	getCoin = async (inputQuery) => {
		try {
			const { data } = await axios(
				`https://crypto-app-server.herokuapp.com/coins/${inputQuery}`
			);
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (e) => {
		this.setState({ inputQuery: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.getCoin(this.state.inputQuery);
	};

	render() {
		return (
			<StyledForm onSubmit={this.handleSubmit}>
				<SearchBar
					onChange={this.handleChange}
					value={this.state.inputQuery}
					type="search"
					placeholder="Search..."
				/>
			</StyledForm>
		);
	}
}
