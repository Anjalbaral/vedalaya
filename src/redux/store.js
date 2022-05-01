import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore } from "redux-persist";

const middlewares = [ReduxThunk];

const store = createStore(rootReducer, undefined, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
