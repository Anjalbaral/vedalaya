import React, { Suspense } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import TopInfoNav from "./TopInfoNav";
import MobileNav from "./MobileNav";

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
			<div className="public-body">{props.children}</div>
			{/* footer */}
			<Footer />
		</div>
	);
}

export default Main;
