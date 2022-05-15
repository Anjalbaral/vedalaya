import React from "react";
import { Link } from "react-router-dom";
import ExperiencedMainpower from "../../assets/images/experienced.png";
import ExcellentService from "../../assets/images/excellent.png";
import HighQuality from "../../assets/images/HighQuality.png";
import BackPattern from "../../assets/images/aboutusbackpattern.png";
import { Parallax } from "react-parallax";
import { BiRightArrow } from "react-icons/bi";

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
					<span>OUR EXPERTISE</span>
				</div>
				<div className="underline-separator">
					<div className="line"></div>
					<div className="mid"></div>
					<div className="line2"></div>
				</div>
				{/* HEAD CONTENT SECTION */}
				<div className="home__about-us__head-content">
					<span>
						we specialize in the construction materials trading, the company has a wide range of products that cater to both the construction and manufacturing industries. With a focus on quality and
						customer satisfaction, Vedalaya sets the benchmark in this field.
					</span>
				</div>
				{/* BODY SECTION */}
				<div className="home__about-us__body">
					<div className="home__about-us__body__head-title">
						<BiRightArrow />
						<span>MODERN & INNOVATIVE CONSTRUCTION SOLUTIONS</span>
					</div>
					<br />
					<div className="home__about-us__body__top">
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={ExperiencedMainpower} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">New construction</span>
								<span className="body">It refers to projects focused on creating a new building from scratch. e.g: commercial buildings, housing complexes</span>
							</div>
						</div>
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={ExcellentService} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Adaptive reuse</span>
								<span className="body">It is another type of construction project that involves repurposing an existing structure for a new use.</span>
							</div>
						</div>
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={HighQuality} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Restoration and rehabilitation</span>
								<span className="body">These projects typically involve Restoration and rehabilitation of different structures.</span>
							</div>
						</div>
					</div>
					<div className="home__about-us__body__top">
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={ExperiencedMainpower} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Green building</span>
								<span className="body">It is another common type of construction project that focuses on creating structures that are environmentally friendly and sustainable.</span>
							</div>
						</div>
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={HighQuality} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Demolition</span>
								<span className="body">It involves tearing down an existing structure in order to make way for something new.</span>
							</div>
						</div>
					</div>
					<div className="divider"></div>
					<br />
					<br />
					<div className="home__about-us__body__head-title">
						<BiRightArrow />
						<span>MODERN & INNOVATIVE UPVC SOLUTIONS</span>
					</div>
					{/* <div className="separator"> */}
					{/* <div></div> */}
					{/* </div> */}
					<div className="home__about-us__body__top">
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={ExperiencedMainpower} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Residential</span>
								<span className="body">This includes various products like Door & window frames,Guttering,Cladding,Exterior doors and windows etc...</span>
							</div>
						</div>
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={HighQuality} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Commercial</span>
								<span className="body">This includes solutions like Entrance doors and gates,Interior doors and partitions,Partitions and wall cladding etc...</span>
							</div>
						</div>
						<div className="home__about-us__body__top__item">
							<div className="home__about-us__body__top__item__A">
								<img src={HighQuality} />
							</div>
							<div className="home__about-us__body__top__item__B">
								<span className="head">Industrial</span>
								<span className="body">This includes products like Pipe systems and valves,Fittings for plumbing, drainage, and HVAC applications,Beams, columns and Trusses etc...</span>
							</div>
						</div>
					</div>
					<div className="home__about-us__body__bottom">
						<Link to="/our-expertise" className="btn-primary-outlined">
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</Parallax>
	);
}

export default AboutUsSection;
