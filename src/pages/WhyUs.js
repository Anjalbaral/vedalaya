import React from "react";
import aboutuscover from "../assets/images/aboutuscover.jpg";
import { Parallax } from "react-parallax";

const WhyUs = () => {
	return (
		<div className="why-us">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				bgImage={aboutuscover}
			>
				<div className="why-us__cover">
					<div className="why-us__cover__overlay"></div>
					<div className="why-us__cover__content">
						<h3>Why Us</h3>
						<span>why to choose us</span>
					</div>
				</div>
			</Parallax>
		</div>
	);
};

export default WhyUs;
