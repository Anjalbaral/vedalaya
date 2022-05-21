import React from "react";
import newconst from "../assets/images/newconst.jpeg";
import { GrProjects } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineWork, MdAttachMoney } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";

function PortfolioDetails() {
	return (
		<div className="portfolio-details">
			<div className="portfolio-details__content">
				<div className="portfolio-details__content__left">
					<img src={newconst} />
					<div className="divider"></div>
					{/* <div className="portfolio-details__content__left__social">
						<AiFillFacebook />
						<AiFillInstagram />
						<AiFillTwitterCircle />
					</div>
					<div className="divider"></div> */}
				</div>
				<div className="portfolio-details__content__right">
					<div className="portfolio-details__content__right__header">New kathmandu school building project</div>
					<div className="separator"></div>
					<div className="portfolio-details__content__right__timeline">
						<div className="port-item">
							<div className="port-item__title">
								<div className="port-item__title__dot"></div>
								<span>started date</span>
							</div>
							<div className="port-item__date">MARCH 2, 2022</div>
						</div>
						<div className="port-item" style={{ marginLeft: "25px" }}>
							<div className="port-item__title">
								<div className="port-item__title__dot completion"></div>
								<span>completion date</span>
							</div>
							<div className="port-item__date">MARCH 2, 2022</div>
						</div>
					</div>
					<div className="portfolio-details__content__right__project-type">
						<div className="portfolio-details__content__right__project-type__header">
							<MdOutlineWork /> <span>project type</span>
						</div>
						<div className="portfolio-details__content__right__project-type__content">Design + Construction Project</div>
					</div>
					<div className="portfolio-details__content__right__project-budget">
						<div className="portfolio-details__content__right__project-budget__header">
							<MdAttachMoney /> <span>estimated budget</span>
						</div>
						<div className="portfolio-details__content__right__project-budget__content">Non-disclosable</div>
					</div>
					<div className="portfolio-details__content__right__description">
						<div className="portfolio-details__content__right__description__header">
							<BiDetail />
							<span>Desctiption</span>
						</div>
						<div className="portfolio-details__content__right__description__content">
							<span>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
								aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
								reprehenderit qui in ea voluptate
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
