import React, { Component } from "react";
import axios from "axios";
import { CoinResult, ResultsDiv, SearchBar, StyledForm } from "./styles";

export default class NavBarSearch extends Component {
	state = {
		coinData: [],
		inputQuery: "",
		hasData: false,
		isLoading: false,
		hasError: false,
	};

	getCoin = async (inputQuery) => {
		try {
			const { data } = await axios(
				`https://crypto-app-server.herokuapp.com/coins/${inputQuery}`
			);
			this.setState({
				hasData: true,
				coinData: data,
				isLoading: false,
				hasError: false,
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (e) => {
		this.setState({
			inputQuery: e.target.value,
			hasData: false,
			isLoading: false,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.getCoin(this.state.inputQuery);
	};

	handleBlur = (e) => {
		this.setState({ inputQuery: e.target.value });
	};

	handleClick = (e) => {
		this.setState({
			hasData: false,
			isLoading: false,
			coinData: [],
			inputQuery: "",
		});
	};

	render() {
		const { hasData, coinData } = this.state;
		return (
			<>
				<StyledForm onSubmit={this.handleSubmit}>
					<SearchBar
						onChange={this.handleChange}
						value={this.state.inputQuery}
						type="search"
						placeholder="Search..."
					/>
					<ResultsDiv>
						{hasData &&
							coinData.map((element) => (
								<CoinResult
									onClick={this.handleClick}
									to={`/coins/${element.id}`}
								>
									{element.name}
								</CoinResult>
							))}
					</ResultsDiv>
				</StyledForm>
			</>
		);
	}
}
