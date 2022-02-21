import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import market from "./marketBar/marketReducer";
import chart from "./cryptoChart/chartReducer";
import currency from "./currency/currencyReducer";
import table from "./tableData/tableReducer";
import search from "./searchBar/searchReducer";
import coinList from "./coinList/coinListReducer";
import coinDetails from "./coinDetails/detailsReducer";
import portfolio from "./portfolio/portfolioReducer";
import theme from "./themeConverter/themeReducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [],
};

const portfolioCoinsPersistConfig = {
	key: "portfolio",
	storage,
	whitelist: ["coins"],
};

const currencyPersistConfig = {
	key: "currency",
	storage,
	whitelist: ["currency"],
};

const rootReducer = combineReducers({
	market,
	chart,
	currency: persistReducer(currencyPersistConfig, currency),
	table,
	search,
	coinDetails,
	coinList,
	portfolio: persistReducer(portfolioCoinsPersistConfig, portfolio),
	theme,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
