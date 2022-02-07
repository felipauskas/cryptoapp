import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResultsData } from "store/searchBar/searchActions";
import { CoinResult, ResultsDiv, SearchBar, StyledForm } from "./styles";
import useOutsideClick from "../../utils/useOutsideClick";

const NavBarSearch = () => {
	const dispatch = useDispatch();
	const search = useSelector((state) => state.search);

	const [inputQuery, setInput] = useState("");
	const [isResultsOpen, setResultsOpen] = useState(false);
	const ref = useRef();

	useOutsideClick(ref, () => {
		if (isResultsOpen) setResultsOpen(false);
	});

	const handleChange = (e) => {
		setInput(e.target.value);
		setResultsOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getResultsData(inputQuery));
		setResultsOpen(true);
	};

	const handleClick = (e) => {
		setInput("");
		setResultsOpen(false);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<SearchBar onChange={handleChange} value={inputQuery} type="search" placeholder="Search..." />
			<ResultsDiv ref={ref}>
				{isResultsOpen &&
					search.coinData.map((element) => (
						<CoinResult onClick={handleClick} to={`/coins/${element.id}`} key={element.id}>
							{element.name}
						</CoinResult>
					))}
			</ResultsDiv>
		</StyledForm>
	);
};

export default NavBarSearch;
