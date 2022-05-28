import { combineReducers } from "redux";
import mainReducer from "./main";
import galleryReducer from "./gallery";
import authReducer from "./auth";
import homeReducer from "./Home";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
	main: mainReducer,
	gallery: galleryReducer,
	auth: authReducer,
	home: homeReducer
});

const persistConfig = {
	key: "vedalaya-root",
	storage: storage,
	whitelist: ["auth"]
};

const pReducer = persistReducer(persistConfig, rootReducer);

export default pReducer;
