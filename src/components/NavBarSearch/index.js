import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { StyledOption, StyledForm, StyledComplete } from "./styles";
import { getCoinList } from "store/coinList/coinListActions";

const NavBarSearch = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const ref = useRef();
	const { close } = props;
	const { hasData, coinList } = useSelector((state) => state.coinList);
	const [coinSearch, setCoins] = useState([]);
	const [inputValue, setInput] = useState("");

	useEffect(() => (hasData ? "" : dispatch(getCoinList())), []);

	const handleSubmit = (value, option) => {
		history.push(`/coins/${option.id}`);
		ref.current.blur();
		setInput("");
		setCoins([]);
		close();
	};

	const handleSearch = (value) => {
		setInput(value);
		if (value.length > 3) {
			const filteredList = coinList.filter((coin) => coin.id.startsWith(value.toLowerCase()));
			const shortList = filteredList.slice(0, 5);
			setCoins(shortList);
		} else {
			setCoins([]);
		}
	};

	return (
		<>
			<StyledForm>
				<StyledComplete
					style={{
						width: "100%",
					}}
					onSearch={handleSearch}
					onSelect={handleSubmit}
					ref={ref}
					value={inputValue}
				>
					{coinSearch.map((coin) => (
						<StyledOption key={coin.id} value={coin.name} id={coin.id}>
							{coin.name}
						</StyledOption>
					))}
				</StyledComplete>
			</StyledForm>
		</>
	);
};

export default NavBarSearch;
