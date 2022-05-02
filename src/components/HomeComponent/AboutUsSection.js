import React from "react";
import ExperiencedMainpower from "../../assets/images/experienced.png";
import ExcellentService from "../../assets/images/excellent.png";
import HighQuality from "../../assets/images/HighQuality.png";
import BackPattern from "../../assets/images/aboutuspattern.png";

function AboutUsSection() {
	return (
		<div className={`home__about-us`}>
			{/* HEAD SECTION */}
			<div className="home__about-us__header">
				<span>ABOUT VEDALAYA GROUP</span>
			</div>
			{/* HEAD CONTENT SECTION */}
			<div className="home__about-us__head-content">
				<span>
					with over a decade of experience in the construction and construction material industry, we provide holistic solutions for all your needs. What's more, the company also offers a construction
					consultation service that helps you to plan your project from inception to closure.
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
					<button className="btn-primary-outlined">Learn More</button>
				</div>
			</div>
			<div className="about-us-background-pattern">
				<img src={BackPattern} />
			</div>
		</div>
	);
}

export default AboutUsSection;
