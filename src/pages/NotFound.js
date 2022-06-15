import React from "react";
import pageNotFound from "../assets/images/pagenotfound2.png";

function NotFound() {
	return (
		<div className="notfound">
			<span>
				<span>Page</span> <span className="nf">Not Found</span>
			</span>
			<div className="nf-details">
				<span>looks like the page you are looking for is missing.</span>
				<span> please try another route.</span>
			</div>
			<br />
			<br />
			<br />
			<img src={pageNotFound} />
		</div>
	);
}

export default NotFound;
