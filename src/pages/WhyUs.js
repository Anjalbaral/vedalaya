import React from "react";
import whyuscover from "../assets/images/whyuscover.jpg";
import { Parallax } from "react-parallax";
import BrandAndLagecy from "../assets/images/brand-and-legacy.png";
import AdvantageAndBenifits from "../assets/images/advantage-and-benifits.png";
import Affordability from "../assets/images/affordability-and-sustainability.png";
import QAAndSafety from "../assets/images/quality-assurance-and-safety.png";
import Partnership from "../assets/images/partnership-prospects.png";
import ResearchAndInnovation from "../assets/images/research-and-innovation.png";

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
		</div>
	);
};

export default WhyUs;
