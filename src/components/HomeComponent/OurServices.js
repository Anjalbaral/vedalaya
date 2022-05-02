import React from "react";
import designandconst from "../../assets/images/designandconst.png";
import interiordesign from "../../assets/images/interiordesign.png";
import exteriordesign from "../../assets/images/exteriordesign.png";
import genralcontracting from "../../assets/images/genralcontracting.png";
import trading from "../../assets/images/trading.png";
import comppricing from "../../assets/images/comppricing.png";
import middletower from "../../assets/images/middletower.png";

function OurServices() {
	return (
		<div className="home__services">
			{/* HEAD SECTION */}
			<div className="home__services__header">
				<span>OUR SERVICES</span>
			</div>
			<div className="home__services__body">
				{/* left */}
				<div className="home__services__body__left">
					<div className="home__services__body__left__item">
						<div className="home__services__body__left__item__left">
							<div className="home__services__body__left__item__left__head">DESIGN & CONSTRUCTION</div>
							<div className="home__services__body__left__item__left__body">we provide various kind of design and construction services</div>
						</div>
						<div className="home__services__body__left__item__right">
							<img src={designandconst} />
						</div>
					</div>
					<div className="home__services__body__left__item">
						<div className="home__services__body__left__item__left">
							<div className="home__services__body__left__item__left__head">INTERIOR DESIGN</div>
							<div className="home__services__body__left__item__left__body">we provide any kind of interior design services</div>
						</div>
						<div className="home__services__body__left__item__right">
							<img src={interiordesign} />
						</div>
					</div>
					<div className="home__services__body__left__item">
						<div className="home__services__body__left__item__left">
							<div className="home__services__body__left__item__left__head">EXTERIOR DESIGN</div>
							<div className="home__services__body__left__item__left__body">we provide various kind of exterior design services</div>
						</div>
						<div className="home__services__body__left__item__right">
							<img src={exteriordesign} />
						</div>
					</div>
				</div>
				{/* right */}
				<div className="home__services__body__right">
					<div className="home__services__body__right__item">
						<div className="home__services__body__right__item__left">
							<img src={genralcontracting} />
						</div>
						<div className="home__services__body__right__item__right">
							<div className="home__services__body__right__item__right__head">GENRAL CONTRACTING</div>
							<div className="home__services__body__right__item__right__body">we provide genral contracting service for construction</div>
						</div>
					</div>
					<div className="home__services__body__right__item">
						<div className="home__services__body__right__item__left">
							<img src={trading} />
						</div>
						<div className="home__services__body__right__item__right">
							<div className="home__services__body__right__item__right__head">TRADING</div>
							<div className="home__services__body__right__item__right__body">we provide trading service for construction materials & goods</div>
						</div>
					</div>
					<div className="home__services__body__right__item">
						<div className="home__services__body__right__item__left">
							<img src={comppricing} />
						</div>
						<div className="home__services__body__right__item__right">
							<div className="home__services__body__right__item__right__head">COMPETITIVE PRICING</div>
							<div className="home__services__body__right__item__right__body">we provide quality service with competitive pricing</div>
						</div>
					</div>
				</div>
			</div>
			{/* middle tower pattern */}
			<div className="middle-tower">
				<img src={middletower} />
			</div>
		</div>
	);
}

export default OurServices;
