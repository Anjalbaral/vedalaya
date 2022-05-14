import React from "react";
import whyuscover from "../assets/images/whyuscover.jpg";
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
				bgImage={whyuscover}
			>
				<div className="why-us__cover">
					<div className="why-us__cover__overlay"></div>
					<div className="why-us__cover__content">
						<h3>Why Us</h3>
						<span>why to choose us</span>
					</div>
				</div>
			</Parallax>
			<div className="why-us__intro">
				<div className="why-us__intro__header">We Offer</div>
				<div className="why-us__intro__body">
					wide range of services, from home renovation and construction to commercial building projects with top-quality construction services that are tailored to our clients' specific needs and
					budget
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
