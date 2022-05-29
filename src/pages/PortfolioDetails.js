import React, { useEffect, useState } from "react";
import newconst from "../assets/images/newconst.jpeg";
import { MdOutlineWork, MdAttachMoney } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { getPortfoliosData } from "../api/portfolio";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import DotLoader from "../components/Reusable/DotLoader";

function PortfolioDetails() {
	const [portfolioDetails, setPortfolioDetails] = useState({});
	const [portfolioImages, setPortfolioImages] = useState([]);
	const [loading, setLoading] = useState(true);
	let params = useParams();

	const _getPortfolioDetails = (query, signal) => {
		getPortfoliosData(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setPortfolioDetails(res.json);
				}
			})
			.catch((err) => {});
	};

	const _getPortfolioImages = (query, signal) => {
		getPortfoliosData(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setPortfolioImages(res.json.results);
				}
			})
			.catch((err) => {});
	};

	useEffect(() => {
		const controller = new AbortController();
		_getPortfolioDetails(`${params.id}/`, controller.signal);
		_getPortfolioImages(`images/`, controller.signal);
		return () => controller.abort();
	}, []);

	if (loading)
		return (
			<div style={{ marginTop: "0px", width: "100%", height: "100vh", display: "flex", padding: "140px 0 0px 0" }}>
				<DotLoader />
			</div>
		);
	return (
		<div className="portfolio-details">
			<div className="portfolio-details__content">
				<div className="portfolio-details__content__left">
					<img src={portfolioDetails && portfolioDetails.header_image ? portfolioDetails.header_image : newconst} />
					<div className="divider"></div>
				</div>
				<div className="portfolio-details__content__right">
					<div className="portfolio-details__content__right__header">{portfolioDetails && portfolioDetails.name ? portfolioDetails.name : "Untitled"}</div>
					<div className="separator"></div>
					<div className="portfolio-details__content__right__timeline">
						<div className="port-item">
							<div className="port-item__title">
								<div className="port-item__title__dot"></div>
								<span>started date</span>
							</div>
							<div className="port-item__date">{portfolioDetails && portfolioDetails.started_date ? portfolioDetails.started_date : "yyyy-mm-dd"}</div>
						</div>
						<div className="port-item" style={{ marginLeft: "25px" }}>
							<div className="port-item__title">
								<div className="port-item__title__dot completion"></div>
								<span>completion date</span>
							</div>
							<div className="port-item__date">{portfolioDetails && portfolioDetails.completion_date ? portfolioDetails.completion_date : "yyyy-mm-dd"}</div>
						</div>
					</div>
					<div className="portfolio-details__content__right__project-type">
						<div className="portfolio-details__content__right__project-type__header">
							<MdOutlineWork /> <span>project type</span>
						</div>
						<div className="portfolio-details__content__right__project-type__content">{portfolioDetails && portfolioDetails.project_type ? portfolioDetails.project_type : "unknown"}</div>
					</div>
					<div className="portfolio-details__content__right__project-budget">
						<div className="portfolio-details__content__right__project-budget__header">
							<MdAttachMoney /> <span>state</span>
						</div>
						<div className="portfolio-details__content__right__project-budget__content">{portfolioDetails && portfolioDetails.state ? portfolioDetails.state : "unknown"}</div>
					</div>
					<div className="portfolio-details__content__right__description">
						<div className="portfolio-details__content__right__description__header">
							<BiDetail />
							<span>Desctiption</span>
						</div>
						<div className="portfolio-details__content__right__description__content">
							<span>{portfolioDetails && portfolioDetails.description ? parse(portfolioDetails.description) : "empty"}</span>
						</div>
					</div>
					<div className="divider"></div>
					<div className="product-details__body__right__description__header" style={{ padding: "15px 0px 5px 30px" }}>
						<span>Sample Images</span>
					</div>
					<div className="product-details__body__right__images" style={{ padding: "15px 0px 5px 20px" }}>
						{portfolioImages && portfolioImages[0]
							? portfolioImages.map((pi, key) => {
									return <div onClick={() => window.open(pi.image, "_blank")} className="product-details__body__right__images__image" style={{ backgroundImage: `url(${pi.image})` }}></div>;
							  })
							: null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
