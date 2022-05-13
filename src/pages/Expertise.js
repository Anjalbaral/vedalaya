import React from "react";
import aboutuscover from "../assets/images/aboutuscover.jpg";
import { Parallax } from "react-parallax";

const Expertise = () => {
	return (
		<div className="expertise">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				bgImage={aboutuscover}
			>
				<div className="expertise__cover">
					<div className="expertise__cover__overlay"></div>
					<div className="expertise__cover__content">
						<h3>Our Expertise</h3>
						<span>fields we expertise on</span>
					</div>
				</div>
			</Parallax>
		</div>
	);
};

export default Expertise;
