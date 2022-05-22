import React from "react";
import { Link } from "react-router-dom";
import coverbanner from "../assets/images/coverbanner.jpg";
import { Parallax } from "react-parallax";
import servicecover from "../assets/images/productscover2.jpg";
import designandconst from "../assets/images/designandconst.png";
import interiordesign from "../assets/images/interiordesign.png";
import exteriordesign from "../assets/images/exteriordesign.png";
import genralcontracting from "../assets/images/genralcontracting.png";
import trading from "../assets/images/trading.png";
import comppricing from "../assets/images/comppricing.png";

function Services() {
	return (
		<div className="services">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				bgImage={servicecover}
			>
				<div className="services__cover">
					<div className="services__cover__overlay"></div>
					<div className="services__cover__content">
						<h3>Our Services</h3>
						<span>services we provide</span>
					</div>
				</div>
			</Parallax>
			<div className="services__intro">
				<div className="services__intro__left">
					<div className="separator">
						<div></div>
					</div>
					<br />
					<div className="services__intro__header">
						<span className="top">Our</span>
						<br />
						<span className="middle">Services</span>
						<br />
						<span className="bottom">Overview.</span>
					</div>
				</div>
				<div className="services__intro__right">
					<span className="services__intro__right__header">Basic overview of Services we provide.</span>
					<span className="services__intro__right__body">
						Our construction company offers innovative design and construction management solutions for both interior and exterior construction projects. The construction company specializes in design
						and consultation, construction management, interior design, and general contracting. The trading company specializes in purchase and procurement of the goods and materials. We have a wide
						variety of construction materials that cater to every construction need. With our vast experience and expertise in the field, we can guarantee that you will be able to find the best
						quality products for your construction or renovation project. We also offer competitive prices so you can get the most value for money. Our team has many years of experience in the
						construction and trading industry, guaranteeing that our clients will be more than satisfied with the services that we provide.
					</span>
					<span className="services__intro__right__footer">
						<div className="dot1"></div>
						<span>vedalaya group</span>
						<div className="dot2"></div>
					</span>
				</div>
			</div>
			<div className="services__sectionA">
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={designandconst} />
					</div>
					<div className="services__sectionA__item__header">Project Management</div>
					<div className="services__sectionA__item__content">
						We provide a full range of project management services, from initiation and planning through to execution and closure. Our team of experienced project managers can help you deliver your
						projects on time, within budget, and to the required quality standards. We can also provide tailored project management training courses to suit your specific needs. Contact us today to
						find out more about our services and how we can help you deliver your next project.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={interiordesign} />
					</div>
					<div className="services__sectionA__item__header">Design and Consultancy</div>
					<div className="services__sectionA__item__content">
						We have a team of experienced professionals who can help you with all aspects of your construction project, from planning and design to execution and completion. We can help you with all
						aspects of your construction project, from planning and design to construction management and supervision. We're dedicated to providing our clients with the best possible service, and
						we're confident that we can help you create the perfect space for your needs.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={designandconst} />
					</div>
					<div className="services__sectionA__item__header">Procurements and Materials Management</div>
					<div className="services__sectionA__item__content">
						Our team of experts have vast experience in all aspects of procurement, from sourcing and contracting to delivery and management. This means that we are able to provide a comprehensive
						service to our clients, ensuring that all their needs are met. We work closely with our clients to understand their specific requirements and then tailor our services to meet those needs.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={genralcontracting} />
					</div>
					<div className="services__sectionA__item__header">Building Information Modeling (BIM)</div>
					<div className="services__sectionA__item__content">
						Building Information Modeling, or BIM, is a powerful tool that vedalaya construction group offers its clients. This technology allows us to create three-dimensional models of buildings and
						their systems. This enables us to better visualize the construction process and identify potential problems early on. In addition, BIM provides a more accurate estimate of project costs
						and timelines, which helps us to better manage our projects. As a result, vedalaya is able to provide its clients with a higher level of service and a more efficient construction process.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={trading} />
					</div>
					<div className="services__sectionA__item__header">Contract Administration</div>
					<div className="services__sectionA__item__content">
						Construction is a process that requires careful planning, coordination, and execution. At Vedalaya, we understand this process and have the experience and expertise to help our clients
						successfully navigate through it. We offer comprehensive contract administration services that cover every aspect of the construction process, from pre-construction through project
						closeout. Our team of construction professionals has extensive experience in all facets of contract administration, including construction claims analysis and resolution, construction site
						inspections, project closeout coordination, and more.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={comppricing} />
					</div>
					<div className="services__sectionA__item__header">Cost Estimating</div>
					<div className="services__sectionA__item__content">
						At vedalaya construction group, we pride ourselves on providing accurate and reliable cost estimating services. We have a team of experienced professionals who are dedicated to providing
						high-quality estimates. We use the latest technology and software to produce accurate estimates. We also offer a free consultation to discuss your project and provide you with a detailed
						estimate.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={designandconst} />
					</div>
					<div className="services__sectionA__item__header">Market Research and Analysis</div>
					<div className="services__sectionA__item__content">
						We offer a wide range of services to our clients, all of which are designed to help them better understand their customers, products, and markets. We have a team of experienced researchers
						who use both primary and secondary data sources to provide our clients with the insights they need to make informed decisions. In addition to our market research and analysis services, we
						also offer a variety of other services, including customer surveys, focus groups, and data mining. We believe that our combination of experience, knowledge, and technology makes us the
						best choice for all of your market research needs.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={interiordesign} />
					</div>
					<div className="services__sectionA__item__header">Quality Control and Safety</div>
					<div className="services__sectionA__item__content">
						We have a dedicated team of professionals who are responsible for ensuring that all of our projects meet the highest standards of quality and safety. We believe that by providing a safe
						and secure working environment, we can provide our clients with the best possible service. Our commitment to safety and quality is evident in everything we do, from the way we manage our
						projects to the way we train our employees. With Vedalaya, you can be confident that you are getting the best possible service.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={designandconst} />
					</div>
					<div className="services__sectionA__item__header">Site Supervision and Safety Management</div>
					<div className="services__sectionA__item__content">
						At Vedalaya Construction Pvt. Ltd, our focus is on providing superior site supervision and safety management services. We have a team of highly experienced and certified professionals who
						are committed to ensuring that your construction project runs smoothly and safely. We offer a comprehensive range of services that includes project planning, scheduling, coordination, and
						quality control. We also provide safety audits and risk assessments to help identify potential hazards and mitigate risks. With our experience and expertise, we can help you avoid costly
						delays and disruptions, and ensure that your construction project is completed on time and within budget.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={trading} />
					</div>
					<div className="services__sectionA__item__header">Sustainability Consulting</div>
					<div className="services__sectionA__item__content">
						Vedalaya Construction Pvt. Ltd is a full-service construction company specializing in sustainable building practices. We offer a variety of services to help our clients achieve their green
						building goals, including LEED certification consulting, energy efficiency consulting, and more. Our team of experts can help you navigate the complex world of sustainable construction,
						ensuring that your project is successful from start to finish.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={genralcontracting} />
					</div>
					<div className="services__sectionA__item__header">Financing and Insurance</div>
					<div className="services__sectionA__item__content">
						Vedalaya Construction Group offers financing and insurance services to help our clients with their construction projects. We have a team of experts who can assist you in finding the right
						financing and insurance options for your project. We understand that not everyone has the same financial situation, so we work with a variety of lenders to find the best possible solution
						for each individual client. We can help you secure the funding you need to get your project off the ground, and we can also help you find the right insurance coverage to protect your
						investment.
					</div>
				</div>
				<div className="services__sectionA__item">
					<div className="services__sectionA__item__top-icon">
						<img src={comppricing} />
					</div>
					<div className="services__sectionA__item__header">Startup Aid</div>
					<div className="services__sectionA__item__content">
						The vedalaya construction group is a startup aid that helps entrepreneurs with the construction of their business. We provide support in the form of advice, tips, and resources to help you
						succeed. We're here to help you with everything from finding the perfect location to helping you get the permits you need. Our goal is to help you grow your business and achieve your
						goals. Visit us today to learn more about our services.
					</div>
				</div>
				<div className="about-us__body__future-prospects" style={{ paddingTop: "70px" }}>
					<div className="about-us__body__future-prospects__dialog">
						<div className="about-us__body__future-prospects__dialog__top">
							<div className="about-us__body__future-prospects__dialog__top__header">
								We Guarantee <span>Quality of service</span>
							</div>
							<div className="about-us__body__future-prospects__dialog__top__body">
								With our vast experience and expertise in the field, we can guarantee that you will be able to find the best quality products for your construction or renovation project. We also offer
								competitive prices so you can get the most value for money.Our team has many years of experience in the construction and trading industry, guaranteeing that our clients will be more
								than satisfied with the services that we provide.
							</div>
						</div>
					</div>
				</div>
				<div className="home__faqs__footer" style={{ paddingBottom: "0px" }}>
					<h4>Want to know more ?</h4>
					<span>if yes, then contact us today to learn more about our construction and trading services.</span>
					<Link to="/contact" className="btn-primary">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Services;
