import React from "react";
import aboutuscover from "../assets/images/aboutuscover.jpg";
import { Parallax } from "react-parallax";

function AboutUs() {
	return (
		<div className="about-us">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: -10, max: 10 }}
				strength={300}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%" }}
				bgImage={aboutuscover}
			>
				<div className="about-us__cover">
					<div className="about-us__cover__overlay"></div>
					<div className="about-us__cover__content">
						<h3>About Us</h3>
						<span>Welcome to vedalaya group</span>
					</div>
				</div>
			</Parallax>
		</div>
	);
}

export default AboutUs;
