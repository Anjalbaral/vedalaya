import React from "react";
import { Link } from "react-router-dom";
import ExperiencedMainpower from "../../assets/images/experienced.png";
import ExcellentService from "../../assets/images/excellent.png";
import HighQuality from "../../assets/images/HighQuality.png";
import BackPattern from "../../assets/images/aboutusbackpattern.png";
import { Parallax } from "react-parallax";

function AboutUsSection() {
	let isMobile = window.innerWidth < 700;
	return (
		<Parallax
			className="about-us-background-pattern"
			blur={{ min: -1, max: 1 }}
			strength={300}
			bgClassName="parallexComp"
			bgImageStyle={{ width: isMobile ? "200%" : "150%", height: "70%", opacity: 0.7, position: "absolute", bottom: "0px" }}
			bgImage={BackPattern}
		>
			<div className={`home__about-us`}>
				{/* HEAD SECTION */}
				<div className="home__about-us__header">
					<span>ABOUT VEDALAYA GROUP</span>
				</div>
				<div className="underline-separator">
					<div className="line"></div>
					<div className="mid"></div>
					<div className="line2"></div>
				</div>
				{/* HEAD CONTENT SECTION */}
				<div className="home__about-us__head-content">
					<span>
						with over a decade of experience in the construction and construction material industry, we provide holistic solutions for all your needs. What's more, the company also offers a
						construction consultation service that helps you to plan your project from inception to closure.
					</span>
				</div>
				{/* BODY SECTION */}
				<div className="home__about-us__body">
					<div className="home__about-us__body__top">
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={ExperiencedMainpower} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Experienced Mainpower</span>
								<span className="body">We have Experienced Mainpower</span>
							</div>
						</div>
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={ExcellentService} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Excellent Service</span>
								<span className="body">We Provide Excellent Service</span>
							</div>
						</div>
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={HighQuality} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">High quality work</span>
								<span className="body">We provide high quality work</span>
							</div>
						</div>
					</div>
					<div className="home__about-us__body__bottom">
						<Link to="/aboutus" className="btn-primary-outlined">
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</Parallax>
	);
}

export default AboutUsSection;
