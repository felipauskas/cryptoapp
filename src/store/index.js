import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import market from "./marketBar/marketReducer";
import chart from "./cryptoChart/chartReducer";
import currency from "./currency/currencyReducer";
import table from "./tableData/tableReducer";
import search from "./searchBar/searchReducer";
import coinList from "./coinList/coinListReducer";
import coinDetails from "./coinDetails/detailsReducer";
import portfolio from "./portfolio/portfolioReducer";

const reducers = combineReducers({
	market,
	chart,
	currency,
	table,
	search,
	coinDetails,
	coinList,
	portfolio,
});

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
