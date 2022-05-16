import React from "react";
import { GiHouse, GiWhiteBook } from "react-icons/gi";
import { FaMoneyCheckAlt, FaHotel, FaIndustry } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { RiBuildingFill, RiGovernmentFill } from "react-icons/ri";

function OurClients() {
	return (
		<div className="home__our-clients">
			<div className="home__our-clients__header">OUR WORKING AREAS</div>
			<div className="underline-separator">
				<div className="line"></div>
				<div className="mid"></div>
				<div className="line2"></div>
			</div>
			<div className="home__our-clients__clients">
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<GiHouse />
					</div>
					<div className="home__our-clients__clients__client__bottom">Residental</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<FaMoneyCheckAlt />
					</div>
					<div className="home__our-clients__clients__client__bottom">Commercial</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<FaHotel />
					</div>
					<div className="home__our-clients__clients__client__bottom">Hotel & Tourism</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<GiWhiteBook />
					</div>
					<div className="home__our-clients__clients__client__bottom">Education</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<FaIndustry />
					</div>
					<div className="home__our-clients__clients__client__bottom">Industrial</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<MdRealEstateAgent />
					</div>
					<div className="home__our-clients__clients__client__bottom">Real estate</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<RiBuildingFill />
					</div>
					<div className="home__our-clients__clients__client__bottom">Rental Retails</div>
				</div>
				<div className="home__our-clients__clients__client">
					<div className="home__our-clients__clients__client__top">
						<RiGovernmentFill />
					</div>
					<div className="home__our-clients__clients__client__bottom">Governmental</div>
				</div>
			</div>
		</div>
	);
}

export default OurClients;
