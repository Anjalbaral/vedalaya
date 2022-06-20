import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/App";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import History from "./helpers/history";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import Loader from "./components/Reusable/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Provider store={store}>
			<Router history={History}>
				<PersistGate loading={<Loader />} persistor={persistor}>
					<App />
				</PersistGate>
			</Router>
		</Provider>
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
