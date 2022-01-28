import React, { useState } from "react";
import { connect } from "react-redux";
import { getResultsData } from "store/searchBar/searchActions";
import { CoinResult, ResultsDiv, SearchBar, StyledForm } from "./styles";

const NavBarSearch = (props) => {
	const [inputQuery, setInput] = useState("");
	const [isResultsOpen, setResultsOpen] = useState(false);

	const handleChange = (e) => {
		setInput(e.target.value);
		setResultsOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.getResultsData(inputQuery);
		setResultsOpen(true);
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
						props.search.coinData.map((element) => (
							<CoinResult onClick={handleClick} to={`/coins/${element.id}`} key={element.id}>
								{element.name}
							</CoinResult>
						))}
				</ResultsDiv>
			</StyledForm>
		</>
	);
};

const mapStateToProps = (state) => ({
	search: state.search,
});

const mapDispatchToProps = {
	getResultsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSearch);
