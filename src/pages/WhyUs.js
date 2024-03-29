import React, { useState, useEffect } from "react";
import whyuscover from "../assets/images/productscover2.jpg";
import { Parallax, Background } from "react-parallax";
import BrandAndLagecy from "../assets/images/brand-and-legacy.png";
import AdvantageAndBenifits from "../assets/images/advantage-and-benifits.png";
import Affordability from "../assets/images/affordability-and-sustainability.png";
import QAAndSafety from "../assets/images/quality-assurance-and-safety.png";
import Partnership from "../assets/images/partnership-prospects.png";
import ResearchAndInnovation from "../assets/images/research-and-innovation.png";
import avatar from "../assets/images/avatar.png";
import { useSelector } from "react-redux";
import { getHomePageData } from "../api/homepage";
import _ from "lodash";
import CONSTANTS from "../globals/constant";
import parse from "html-react-parser";

const WhyUs = () => {
	let isMobile = window.innerWidth < 700;
	const [whyUsData, setWhyUsData] = useState({});
	const whyUsCover = useSelector((state) => state.main.coverData);
	let filteredData = whyUsCover.filter((ac, ind) => ac.on_page === "why_us");
	const [testimonialsData, setTestimonialsData] = useState({});
	const [loading, setLoading] = useState(true);

	const _getTestimonialData = (query, signal) => {
		setLoading(true);
		getHomePageData(query, signal)
			.then((res) => {
				if (res.response.ok) {
					res = res.json;
					setLoading(false);
					let randomItem = res.testimonials ? _.shuffle(res.testimonials)[0] : {};
					setTestimonialsData(randomItem);
				}
			})
			.catch((err) => {
				// fireSpark("error", err);
			});
	};

	useEffect(() => {
		const controller = new AbortController();
		_getTestimonialData("", controller.signal);
		return () => controller.abort();
	}, []);

	useEffect(() => {
		if (filteredData[0]) {
			let isVideo = filteredData[0].content.slice(-3) === "mp4";
			setWhyUsData({ ...filteredData[0], isVideo: isVideo });
		}
	}, []);

	return (
		<div className="why-us">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%", borderBottomStyle: "solid", borderBottomWidth: "3px", borderColor: "#F1C12D" }}
				blur={{ min: 0, max: 0 }}
				strength={0}
				bgClassName="parallexComp"
				bgImageStyle={{ width: isMobile ? "300%" : "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				// bgImage={whyUsData && whyUsData.content ? whyUsData.content : whyuscover}
			>
				<Background className="custom-bg custom-cover">
					{whyUsData && whyUsData.isVideo ? (
						<video src={whyUsData && whyUsData.content ? whyUsData.content : whyuscover} autoPlay muted loop />
					) : (
						<img src={whyUsData && whyUsData.content ? whyUsData.content : whyuscover} />
					)}
				</Background>
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
				<div className="separator"></div>
				<div className="why-us__intro__body">
					wide range of services, from home renovation and construction to commercial building projects with top-quality construction services that are tailored to our clients' specific needs and
					budget
				</div>
			</div>
			<br />
			<div className="why-us__our-features">
				<div className="why-us__our-features__item">
					<div className="why-us__our-features__item__top">
						<img src={BrandAndLagecy} />
					</div>
					<div className="separator"></div>
					<div className="why-us__our-features__item__content">
						<div className="why-us__our-features__item__content__header">
							Brand and <span>Lagecy</span>
						</div>
						<div className="why-us__our-features__item__content__body">
							We have a strong commitment to our customers and always work to provide the highest quality products and services. With a strong focus on quality and customer satisfaction, we have been
							able to carve a niche for ourselves in the industry.
						</div>
					</div>
				</div>
				<div className="why-us__our-features__item">
					<div className="why-us__our-features__item__top">
						<img src={AdvantageAndBenifits} />
					</div>
					<div className="separator"></div>
					<div className="why-us__our-features__item__content">
						<div className="why-us__our-features__item__content__header">
							Features and <span>Benefits</span>
						</div>
						<div className="why-us__our-features__item__content__body">
							At Vedalaya Group, we pride ourselves on providing top-quality construction services that are tailored to our clients' specific needs and budget. We offer a wide range of services, from
							home renovation and construction to commercial building projects.
						</div>
					</div>
				</div>
				<div className="why-us__our-features__item">
					<div className="why-us__our-features__item__top">
						<img src={Partnership} />
					</div>
					<div className="separator"></div>
					<div className="why-us__our-features__item__content">
						<div className="why-us__our-features__item__content__header">
							Partnership <span>Prospects</span>
						</div>
						<div className="why-us__our-features__item__content__body">
							As your construction partner, we'll work closely with you to understand your specific needs and requirements. We then put together a tailor-made solution that meets your needs and
							budget.
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="why-us__our-features two">
				<div className="why-us__our-features__item">
					<div className="why-us__our-features__item__top">
						<img src={QAAndSafety} />
					</div>
					<div className="separator"></div>
					<div className="why-us__our-features__item__content">
						<div className="why-us__our-features__item__content__header">Quality Assurance and Safety</div>
						<div className="why-us__our-features__item__content__body">
							Quality and safety are important considerations in any construction project. At Vedalaya Group, we are committed to providing our clients with the highest quality standards and safest
							possible working conditions.
						</div>
					</div>
				</div>
				<div className="why-us__our-features__item">
					<div className="why-us__our-features__item__top">
						<img src={Affordability} />
					</div>
					<div className="separator"></div>
					<div className="why-us__our-features__item__content">
						<div className="why-us__our-features__item__content__header">Affordability and Sustainability</div>
						<div className="why-us__our-features__item__content__body">
							We are always looking for ways to make our services more affordable and sustainable. We believe that by working together, we can continue to find new solutions that benefit everyone
							involved.
						</div>
					</div>
				</div>
				<div className="why-us__our-features__item">
					<div className="why-us__our-features__item__top">
						<img src={ResearchAndInnovation} />
					</div>
					<div className="separator"></div>
					<div className="why-us__our-features__item__content">
						<div className="why-us__our-features__item__content__header">Research and Innovation</div>
						<div className="why-us__our-features__item__content__body">
							Vedalaya Group focuses on research and innovation in the field of construction and construction materials. We believe that by constantly pushing the boundaries of what is possible, we
							can create better and more efficient ways to build the future.
						</div>
					</div>
				</div>
			</div>
			{testimonialsData ? (
				<div className="why-us__recomendation">
					<div className="why-us__recomendation__header">"Vedalaya Group Is Great"</div>
					<div className="why-us__recomendation__content">{testimonialsData && testimonialsData.description ? parse(testimonialsData.description) : ""}</div>
					<div className="why-us__recomendation__avatar">
						<img src={testimonialsData && testimonialsData.logo ? `${CONSTANTS.BASE_URL}${testimonialsData.logo}` : avatar} />
					</div>
					<div className="why-us__recomendation__client">{testimonialsData && testimonialsData.name ? testimonialsData.name : ""}</div>
					<div className="why-us__recomendation__client-info">---</div>
				</div>
			) : null}
		</div>
	);
};

export default WhyUs;
