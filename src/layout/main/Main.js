import React, { Suspense } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import TopInfoNav from "./TopInfoNav";
import MobileNav from "./MobileNav";
import ErrorBoundary from "../../hoc/ErrorBoundry";

function Main(props) {
	return (
		<div className="public-main">
			{/* top info nav */}
			<TopInfoNav />
			{/* top nav */}
			<TopNav />
			{/* mobile nav */}
			<MobileNav />
			{/* body */}
			{/* <ErrorBoundary> */}
			<div className="public-body">{props.children}</div>
			{/* </ErrorBoundary> */}
			{/* footer */}
			<Footer />
		</div>
	);
}

export default Main;
