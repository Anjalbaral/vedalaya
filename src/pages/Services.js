import React from "react";
import coverbanner from "../assets/images/coverbanner.jpg";
import { Parallax } from "react-parallax";
import servicecover from "../assets/images/servicescover2.jpg";

function Services() {
	return (
		<div className="services">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				bgImage={servicecover}
			>
				<div className="expertise__cover">
					<div className="expertise__cover__overlay"></div>
					<div className="expertise__cover__content">
						<h3>Our Services</h3>
						<span>services we provide</span>
					</div>
				</div>
			</Parallax>
		</div>
	);
}

export default Services;
