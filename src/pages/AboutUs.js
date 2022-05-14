import React from "react";
import aboutuscover from "../assets/images/aboutuscover.jpg";
import { Parallax } from "react-parallax";
import { IoMdArrowDropright } from "react-icons/io";
import BackPattern from "../assets/images/bbb.png";
import { Link } from "react-router-dom";
import { RiMessage2Fill } from "react-icons/ri";

function AboutUs() {
	return (
		<>
			<div className="about-us">
				<Parallax
					className="cover-parent"
					style={{ minWidth: "100%" }}
					blur={{ min: 0, max: 0 }}
					strength={200}
					bgClassName="parallexComp"
					bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
					bgImage={aboutuscover}
				>
					<div className="about-us__cover">
						<div className="about-us__cover__overlay"></div>
						<div className="about-us__cover__content">
							<h3>About Us</h3>
							<span>welcome to vedalaya group</span>
						</div>
					</div>
				</Parallax>
				<div className="about-us__body">
					<div className="about-us__body__intro">
						<div className="about-us__body__intro__item">
							<div className="about-us__body__intro__item__divider"></div>
							<div className="about-us__body__intro__item__header">Who We Are</div>
							<div className="about-us__body__intro__item__content">
								Vedalaya is a group of construction and construction materials trading companies that specialize in modern construction methods and materials.
							</div>
						</div>
						<div className="about-us__body__intro__item">
							<div className="about-us__body__intro__item__divider"></div>
							<div className="about-us__body__intro__item__header">Our Mission</div>
							<div className="about-us__body__intro__item__content">
								Vedalaya Group is committed to finding better ways to build throughout Nepal. We provide complete construction services to realize our customer's projects through consultation to
								construction, along with modern and innovative construction materials of optimal qualities for each project.
							</div>
						</div>
						<div className="about-us__body__intro__item">
							<div className="about-us__body__intro__item__divider"></div>
							<div className="about-us__body__intro__item__header">Future Prospect</div>
							<div className="about-us__body__intro__item__content">
								Our vision is inclined toward building intelligent and sustainable construction projects, implementing the latest state-of-art technology to make a difference by maintaining strong
								financial resources, embracing technological integration, and staying on top of the market trends.
							</div>
						</div>
					</div>
					<div
						className="about-us__body__our-story"
						// style={{ backgroundImage: `url(${BackPattern})` }}
					>
						<div className="about-us__body__our-story__header">Our story</div>
						<div className="separator"></div>
						<div className="decorator">
							<span className="decorator__A">‟</span>
							{/* <span className="decorator__B">❜</span> */}
						</div>
						<div className="about-us__body__our-story__body">
							With over a decade of experience in the construction and construction materials industry, we provide holistic solutions for all your needs. What's more, the company also offers a
							construction consultation service that helps you to plan your project from inception to closure. With over a decade of experience in the construction industry, Vedalaya's team of experts
							can help you optimize your budget with splendid design that exceeds your expectations. From construction materials to industrial supplies, Vedalaya has something to offer everyone. With
							a wide network of suppliers and manufacturers, the company is able to provide quality products at competitive price. Utilizing the latest in construction technology, we are able to
							provide customers with a wide range of high quality construction materials at competitive price. Whether it be construction materials, hardware, tiles, paints, lights, or sanitary ware,
							Vedalaya has a product that meets the needs of your construction project. In addition, we also offer consultation services for those who need help choosing the right construction
							technology and materials. Our portfolio itself is the source of confidence, we deliver quality construction projects on time and on budget all over Nepal.
						</div>
					</div>
					<div className="about-us__body__our-mission">
						<div className="about-us__body__our-mission__left">
							<img src="https://hace-software.com/wp-content/uploads/2021/05/iStock-501222552.jpg" />
							{/* <img src="https://hace-software.com/wp-content/uploads/2021/05/iStock-501222552.jpg" /> */}
						</div>
						<div className="about-us__body__our-mission__right">
							<div className="about-us__body__our-mission__right__header">Our Vision & Objectives</div>
							<div className="separator"></div>
							<div className="about-us__body__our-mission__right__content">
								<ul>
									<li>
										<IoMdArrowDropright /> To save time and money on construction projects by providing expert help with bidding, design, detailing, project execution, and contracting.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To provide professional and expert services in preparing tender documents, contract agreements, specifications, project feasibility, and proposals.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To provide construction materials and hardware from our assembly and manufacturing plant and an extensive network of suppliers for all construction project needs.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To provide innovative and sustainable design solutions that meet the latest industry standards.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To work closely with clients to understand their specific needs and offer tailored solutions that fit their requirements.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To incorporate the latest technology and software that helps deliver quality output within the stipulated time frame.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To build a team of experienced professionals who have a proven track record in successfully completing construction projects and managing a large revenue company.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To contribute to the national infrastructure development directly and indirectly.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To facilitate partnerships and franchises with our group.
									</li>
									<div className="divider"></div>
									<li>
										<IoMdArrowDropright />
										To build a proper foundation for research and development to have a sustainable competitive advantage.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="about-us__body__our-team">
						<div className="about-us__body__our-team__left">
							<div className="about-us__body__our-team__left__header">Our Team</div>
							<div className="separator"></div>
							<div className="about-us__body__our-team__left__body">
								The founder of Vedalaya Construction and Trading Company, Mr. Jaya Ram Aryal, has a long and successful history in the construction and trading industry. Beginning with a background in
								construction, Mr. Aryal has worked his way up to leading one of the most successful construction and trading firms in Nepal, Kshamadevi Group. With more than two decades of experience
								in the field, he has the knowledge and expertise to oversee all aspects of Vedalaya Construction and Trading Company. From construction to marketing and sales, Mr. Aryal is dedicated
								to ensuring the success of the company.
								<br />
								<br /> With his leadership and experience, Vedalaya Group is poised for continued success in the construction and trading industry. In addition to Mr. Aryal, Vedalaya also has a strong
								management team with years of experience in construction, trading, and business management. This team is responsible for ensuring that all operations run smoothly and that the company
								continues to grow and succeed. The team is composed of individuals with backgrounds in construction, engineering, business administration, and marketing. Each member of the team brings
								their own skills and knowledge to help the company grow and succeed. Together, we are committed to providing excellent construction and trading services that meet the needs of our
								client. Our construction services are tailored to meet the specific needs of our client, and we always work closely with them to ensure that they are happy with the result.
							</div>
						</div>
						<div className="about-us__body__our-team__right">
							<div style={{ backgroundImage: `url(https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)` }}></div>
						</div>
					</div>
					<div className="about-us__body__future-prospects">
						<div className="about-us__body__future-prospects__dialog">
							<div className="about-us__body__future-prospects__dialog__top">
								<div className="about-us__body__future-prospects__dialog__top__header">
									Want to know about our <span>Future Prospects</span> ?
								</div>
								<div className="about-us__body__future-prospects__dialog__top__body">
									Our vision is inclined toward building intelligent and sustainable construction projects, implementing the latest state-of-art technology to make a difference by maintaining strong
									financial resources, embracing technological integration, and staying on top of the market trends. We aim to be an industry leader in 5 years for both small construction project
									management and large ones alike! We strive to achieve this by building solid expertise in extensive construction management, a diverse construction portfolio, real estate
									investments, innovative R&D, and building a vast repertoire of resources (Human, Technological, and Material).
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home__faqs__footer" style={{ paddingBottom: "50px", backgroundColor: "#FAFAFC" }}>
				<h4>Want to know more about us ?</h4>
				<span>
					if yes, then you can directly message us form here. <br />
					We'll respond to you withing 24 hours.
				</span>
				<Link to="/contact" className="btn-primary">
					Message Us
				</Link>
			</div>
		</>
	);
}

export default AboutUs;
