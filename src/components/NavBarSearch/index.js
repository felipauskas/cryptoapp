import React, { useState } from "react";
import axios from "axios";
import { CoinResult, ResultsDiv, SearchBar, StyledForm } from "./styles";

const NavBarSearch = () => {
	const [isLoading, setLoading] = useState(false);
	const [hasError, setError] = useState(false);
	const [coinData, setCoinData] = useState([]);
	const [inputQuery, setInput] = useState("");
	const [isResultsOpen, setResultsOpen] = useState(false);

	const getCoin = async (inputQuery) => {
		try {
			const { data } = await axios(`https://crypto-app-server.herokuapp.com/coins/${inputQuery}`);
			setResultsOpen(true);
			setCoinData(data);
			setLoading(false);
			setError(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		setInput(e.target.value);
		setResultsOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getCoin(inputQuery);
	};

	const handleClick = (e) => {
		setInput("");
		setResultsOpen(false);
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<SearchBar
					onChange={handleChange}
					value={inputQuery}
					type="search"
					placeholder="Search..."
				/>
				<ResultsDiv>
					{isResultsOpen &&
						coinData.map((element) => (
							<CoinResult onClick={handleClick} to={`/coins/${element.id}`} key={element.id}>
								{element.name}
							</CoinResult>
						))}
				</ResultsDiv>
			</StyledForm>
		</>
	);
};

export default NavBarSearch;
