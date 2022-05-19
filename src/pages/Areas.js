import React from "react";
import coverimg from "../assets/images/workareacover2.jpeg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Areas = () => {
	return (
		<div className="areas">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				bgImage={coverimg}
			>
				<div className="areas__cover">
					<div className="areas__cover__overlay"></div>
					<div className="areas__cover__content">
						<h3>Our Working Areas</h3>
						<span>areas we work on</span>
					</div>
				</div>
			</Parallax>
			<div className="areas__intro">
				<div className="areas__intro__header">Here At Vedalaya</div>
				<div className="separator"></div>
				<div className="areas__intro__body">
					we focus on construction and trading in a range of different areas. This includes the hotel industry, schools and colleges, office spaces, and residential buildings but not limited to those.
					We are always open to working with innovative start-ups, and we also are open to partnerships for real estate investments. Our construction and trading expertise ensures that each project is
					successfully completed and delivered on time. With our experience and knowledge, we provide a construction or trading service that is efficient, reliable, and of the highest quality.
				</div>
			</div>
			<div className="areas__sectionA">
				<div className="areas__sectionA__item">
					<div className="areas__sectionA__item__top">01</div>
					<div className="areas__sectionA__item__header">Residental</div>
					<div className="areas__sectionA__item__body">
						Vedalaya group has various residential projects that are aimed at providing quality homes to people from all walks of life. The company specializes in developing luxury and affordable
						apartments, resorts and villas as well as bungalows.
					</div>
					<div className="areas__sectionA__item__footer"></div>
				</div>
				<div className="areas__sectionA__item">
					<div className="areas__sectionA__item__top">02</div>
					<div className="areas__sectionA__item__header">Commercial</div>
					<div className="areas__sectionA__item__body">
						Vedalaya group is one of the leading developers and builders in Nepal, specializing in infrastructure development for commercial purposes, such as offices, shops, retail outlets,developing
						complexes and many more.
					</div>
					<div className="areas__sectionA__item__footer"></div>
				</div>
				<div className="areas__sectionA__item">
					<div className="areas__sectionA__item__top">03</div>
					<div className="areas__sectionA__item__header">Hotel and Tourism</div>
					<div className="areas__sectionA__item__body">
						Nepal is a popular tourist destination for people from all over the globe. Vedalaya group has extensive experience in developing hotels, resorts and other tourism-related infrastructure
						that cater to this growing segment of the market.
					</div>
					<div className="areas__sectionA__item__footer"></div>
				</div>
				<div className="areas__sectionA__item">
					<div className="areas__sectionA__item__top">04</div>
					<div className="areas__sectionA__item__header">Education</div>
					<div className="areas__sectionA__item__body">
						Vedalaya group has an exprience of working with educational institutions to modernize and improve their facilities. The company specializes in the construction, renovation and expansion of
						schools, colleges and universities.
					</div>
					<div className="areas__sectionA__item__footer"></div>
				</div>
				<div className="areas__sectionA__item">
					<div className="areas__sectionA__item__top">05</div>
					<div className="areas__sectionA__item__header">Industrial</div>
					<div className="areas__sectionA__item__body">
						Vedalaya group has various residential projects that are aimed at providing quality homes to people from all walks of life. The company specializes in developing luxury and affordable
						apartments, resorts and villas as well as bungalows.
					</div>
					<div className="areas__sectionA__item__footer"></div>
				</div>
				<div className="areas__sectionA__item">
					<div className="areas__sectionA__item__top">06</div>
					<div className="areas__sectionA__item__header">Real Estate</div>
					<div className="areas__sectionA__item__body">
						Vedalaya group is one of the leading developers and builders in Nepal, specializing in infrastructure development for commercial purposes, such as offices, shops, retail outlets,developing
						complexes and many more.
					</div>
					<div className="areas__sectionA__item__footer"></div>
				</div>
				<div className="areas__sectionA__item">
					<div className="areas__sectionA__item__top">07</div>
					<div className="areas__sectionA__item__header">Rental Retails</div>
					<div className="areas__sectionA__item__body">
						Nepal is a popular tourist destination for people from all over the globe. Vedalaya group has extensive experience in developing hotels, resorts and other tourism-related infrastructure
						that cater to this growing segment of the market.
					</div>
					<div className="areas__sectionA__item__footer"></div>
				</div>
				<div className="areas__sectionA__item">
					<div className="areas__sectionA__item__top">08</div>
					<div className="areas__sectionA__item__header">Governmental</div>
					<div className="areas__sectionA__item__body">
						Vedalaya group has an exprience of working with educational institutions to modernize and improve their facilities. The company specializes in the construction, renovation and expansion of
						schools, colleges and universities.
					</div>
					<div className="areas__sectionA__item__footer"></div>
				</div>
				<br />
				<div className="underline-separator" style={{ marginTop: "35px" }}>
					<div className="line"></div>
					<div className="mid"></div>
					<div className="line2"></div>
				</div>
				<div className="about-us__body__future-prospects" style={{ paddingTop: "35px" }}>
					<div className="about-us__body__future-prospects__dialog">
						<div className="about-us__body__future-prospects__dialog__top">
							<div className="about-us__body__future-prospects__dialog__top__header">
								About our <span>Infrastructure Projects</span>
							</div>
							<div className="about-us__body__future-prospects__dialog__top__body">
								Vedalaya Group has contributed directly or indirectly in successfully developing infrastructure projects across several states in Nepal. These include roads and highways, bridges and
								flyovers, ports and airports, hospitals and schools. The company works closely with local authorities to ensure that its projects meet the needs of both the government & private
								sectors.
							</div>
						</div>
					</div>
				</div>
				<div className="underline-separator" style={{ marginTop: "35px" }}>
					<div className="line"></div>
					<div className="mid"></div>
					<div className="line2"></div>
				</div>
				<div className="home__faqs__footer" style={{ paddingBottom: "50px" }}>
					<h4>Want to know more ?</h4>
					<span>if yes, then contact us today to learn more about our working areas.</span>
					<Link to="/contact" className="btn-primary">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Areas;
