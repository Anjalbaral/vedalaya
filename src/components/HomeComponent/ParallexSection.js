import React from "react";
import { Parallax } from "react-parallax";
import BackPattern from "../../assets/images/backbuildnew.png";
import { Link } from "react-router-dom";

function ParallexSection() {
	const isMobile = window.innerWidth < 700;
	return (
		<Parallax
			className="about-us-background-pattern"
			blur={{ min: -15, max: 15 }}
			strength={500}
			bgClassName="parallexComp"
			bgImageStyle={{ height: "150%", width: isMobile ? "400%" : "150%", opacity: 0.4, position: "absolute", bottom: "-200px" }}
			bgImage={BackPattern}
		>
			<div className="home__parallex-section">
				<div className="home__parallex-section__top">
					<p>
						Experience the <span>quality </span>
						of our products only by using them
					</p>
				</div>
				<div className="home__parallex-section__bottom">
					<Link to="/products" className="btn-primary">
						View Products
					</Link>
				</div>
			</div>
		</Parallax>
	);
}

export default ParallexSection;
