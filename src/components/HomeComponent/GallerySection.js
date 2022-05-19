import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import activemenuicon from "../../assets/images/activemenuicon.png";
import windowdoors from "../../assets/images/window&doors-p1.jpg";
import roofing from "../../assets/images/roofing-p2.jpg";
import flooring from "../../assets/images/flooring-p3.jpg";
import fascia from "../../assets/images/fascia-p4.jpg";
import glutter from "../../assets/images/glutter.jpg";
import pipes from "../../assets/images/pipes.jpg";

const galleryData = [
	{
		id: 1,
		title: "UPVC windows and doors",
		description: "Vedalaya Construction offers a wide range of high-quality UPVC windows and doors that are designed to withstand the harsh weather conditions of Nepal.",
		image: windowdoors
	},
	{
		id: 2,
		title: "UPVC roofing and cladding",
		description: "Vedalaya Construction offers a wide range of UPVC roofing and cladding products that are designed to withstand the harsh weather conditions of Nepal.",
		image: roofing
	},
	{
		id: 3,
		title: "UPVC flooring and decking",
		description: "Our durable UPVC flooring and decking products are easy to install and perfect for use indoors or outdoors.",
		image: flooring
	},
	{
		id: 4,
		title: "UPVC soffits and fascia",
		description: "Vedalaya UPVC soffits and fascia is the perfect way to improve your home’s exterior.",
		image: fascia
	},
	{
		id: 5,
		title: "Gutters and downspouts",
		description: "Gutters are an essential part of any building's plumbing system, helping to direct rainwater away from walls and foundations.",
		image: glutter
	},
	{
		id: 6,
		title: "Pipes and fittings",
		description: "UPVC pipes and fittings are commonly used for both drainage and water supply applications.",
		image: pipes
	},
	{
		id: 7,
		title: "Electrical conduit",
		description: "UPVC is also commonly used as electrical conduit, due to its resistance to corrosion and degradation.",
		image: "https://5.imimg.com/data5/SELLER/Default/2021/2/FS/FB/JT/12827755/living-room-interior-designing-500x500.png"
	}
];

function GallerySection() {
	return (
		<div className="home__gallery-section">
			{/* HEAD SECTION */}
			<div className="home__gallery-section__header">
				<span>OUR PRODUCT GALLERY</span>
			</div>
			<div className="underline-separator">
				<div className="line"></div>
				<div className="mid"></div>
				<div className="line2"></div>
			</div>
			<div className="home__gallery-section__head-content">
				<span>
					With over a decade of experience in the construction and construction material industry, we provide holistic solutions for all your needs. What's more, the company also offers a construction
					consultation service that helps.
				</span>
			</div>
			{/* gallery iamges */}
			<div className="home__gallery-section__body">
				<div className="home__gallery-section__body__item">
					<div className="home__gallery-section__body__item__subitem" style={{ backgroundImage: `url(${galleryData[0].image})` }}>
						<div className="overlayy"></div>
						<div className="content">
							<div className={`content__icon`}>
								<img src={activemenuicon} />
							</div>
							<div className="content__body">
								<Link to="/products" className="redirect">
									view items
									<CgArrowLongRight style={{ fontSize: "20px" }} />
								</Link>
								<div className="separator"></div>
								<span className="title">{galleryData[0].title}</span>
								<span className="description">{galleryData[0].description}</span>
							</div>
						</div>
					</div>
					<div className="home__gallery-section__body__item__subitem" style={{ backgroundImage: `url(${galleryData[1].image})` }}>
						<div className="overlayy"></div>
						<div className="content">
							<div className={`content__icon`}>
								<img src={activemenuicon} />
							</div>
							<div className="content__body">
								<Link to="/products" className="redirect">
									view items
									<CgArrowLongRight style={{ fontSize: "20px" }} />
								</Link>
								<div className="separator"></div>
								<span className="title">{galleryData[1].title}</span>
								<span className="description">{galleryData[1].description}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="home__gallery-section__body__item">
					<div className="home__gallery-section__body__item__subitem" style={{ backgroundImage: `url(${galleryData[2].image})` }}>
						<div className="overlayy"></div>
						<div className="content">
							<div className={`content__icon`}>
								<img src={activemenuicon} />
							</div>
							<div className="content__body">
								<Link to="/products" className="redirect">
									view items
									<CgArrowLongRight style={{ fontSize: "20px" }} />
								</Link>
								<div className="separator"></div>
								<span className="title">{galleryData[2].title}</span>
								<span className="description">{galleryData[2].description}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="home__gallery-section__body__item">
					<div className="home__gallery-section__body__item__subitem" style={{ backgroundImage: `url(${galleryData[3].image})` }}>
						<div className="overlayy"></div>
						<div className="content">
							<div className={`content__icon`}>
								<img src={activemenuicon} />
							</div>
							<div className="content__body">
								<Link to="/products" className="redirect">
									view items
									<CgArrowLongRight style={{ fontSize: "20px" }} />
								</Link>
								<div className="separator"></div>
								<span className="title">{galleryData[3].title}</span>
								<span className="description">{galleryData[3].description}</span>
							</div>
						</div>
					</div>
					<div className="home__gallery-section__body__item__subitem" style={{ backgroundImage: `url(${galleryData[4].image})` }}>
						<div className="overlayy"></div>
						<div className="content">
							<div className={`content__icon`}>
								<img src={activemenuicon} />
							</div>
							<div className="content__body">
								<Link to="/products" className="redirect">
									view items
									<CgArrowLongRight style={{ fontSize: "20px" }} />
								</Link>
								<div className="separator"></div>
								<span className="title">{galleryData[4].title}</span>
								<span className="description">{galleryData[4].description}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="home__gallery-section__body__item">
					<div className="home__gallery-section__body__item__subitem" style={{ backgroundImage: `url(${galleryData[5].image})` }}>
						<div className="overlayy"></div>
						<div className="content">
							<div className={`content__icon`}>
								<img src={activemenuicon} />
							</div>
							<div className="content__body">
								<Link to="/products" className="redirect">
									view items
									<CgArrowLongRight style={{ fontSize: "20px" }} />
								</Link>
								<div className="separator"></div>
								<span className="title">{galleryData[5].title}</span>
								<span className="description">{galleryData[5].description}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home__gallery-section__bottom">
				<Link to="/products" className="btn-primary-outlined">
					Explore More <CgArrowLongRight />
				</Link>
			</div>
		</div>
	);
}

export default GallerySection;
