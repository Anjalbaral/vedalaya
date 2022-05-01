import React, { Suspense } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import TopInfoNav from "./TopInfoNav";

function Main(props) {
	return (
		<div className="public-main">
			{/* top info nav */}
			<TopInfoNav />
			{/* top nav */}
			<TopNav />
			{/* body */}
			<div className="public-body">{props.children}</div>
			{/* footer */}
			<Footer />
		</div>
	);
}

export default Main;
