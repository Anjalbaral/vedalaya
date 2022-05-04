import React from "react";
import Lottie from "react-lottie";
import fallbackloader from "../../assets/lottie/fallbackloader.json";

function Loader() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: fallbackloader,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};
	return (
		<div className="lottie-loader">
			<Lottie width={100} height={100} options={defaultOptions} />
		</div>
	);
}

export default Loader;
