import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import activemenuicon from "../../assets/images/activemenuicon.png";
import windowdoors from "../../assets/images/window&doors-p1.jpg";
import roofing from "../../assets/images/roofing-p2.jpg";
import flooring from "../../assets/images/flooring-p3.jpg";
import fascia from "../../assets/images/fascia-p4.jpg";
import glutter from "../../assets/images/glutter.jpg";
import pipes from "../../assets/images/pipes.jpg";
import CONSTANTS from "../../globals/constant";
import DotLoader from "../Reusable/DotLoader";

const defaultGalleryImage = {
	id: 0,
	title: "",
	description: "",
	image: "http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png"
};

const galleryData = [
	{
		id: 1,
		name: "sth",
		description: "",
		image: "http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png"
	},
	{
		id: 2,
		name: "UPVC roofing and cladding",
		description: "Vedalaya Construction offers a wide range of UPVC roofing and cladding products that are designed to withstand the harsh weather conditions of Nepal.",
		image: roofing
	},
	{
		id: 3,
		name: "UPVC flooring and decking",
		description: "Our durable UPVC flooring and decking products are easy to install and perfect for use indoors or outdoors.",
		image: flooring
	},
	{
		id: 4,
		name: "UPVC soffits and fascia",
		description: "Vedalaya UPVC soffits and fascia is the perfect way to improve your home’s exterior.",
		image: fascia
	},
	{
		id: 5,
		name: "Gutters and downspouts",
		description: "Gutters are an essential part of any building's plumbing system, helping to direct rainwater away from walls and foundations.",
		image: glutter
	},
	{
		id: 6,
		name: "Pipes and fittings",
		description: "UPVC pipes and fittings are commonly used for both drainage and water supply applications.",
		image: pipes
	},
	{
		id: 7,
		name: "Electrical conduit",
		description: "UPVC is also commonly used as electrical conduit, due to its resistance to corrosion and degradation.",
		image: "https://5.imimg.com/data5/SELLER/Default/2021/2/FS/FB/JT/12827755/living-room-interior-designing-500x500.png"
	}
];

function GallerySection({ data, loading }) {
	const [galleryItems, setGalleryItems] = useState([]);

	useEffect(() => {
		if (data.length > 0) {
			setGalleryItems(data);
		}
	}, [data]);

	if (loading)
		return (
			<div className="home__gallery-section">
				<DotLoader />
			</div>
		);

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
					<div
						className="home__gallery-section__body__item__subitem"
						style={{ backgroundImage: galleryItems && galleryItems[0] && galleryItems[0].image ? `url(${CONSTANTS.BASE_URL}${galleryItems[0].image})` : `url(${defaultGalleryImage.image})` }}
					>
						<div className="overlayy"></div>
						{galleryItems && galleryItems[0] && (
							<div className="content">
								<div className={`content__icon`}>
									<img src={activemenuicon} />
								</div>
								<div className="content__body">
									<span className="title">{galleryItems && galleryItems[0] && galleryItems[0].name ? `${galleryItems[0].name}` : `unknown`}</span>
									<div className="separator"></div>
									{galleryItems && galleryItems[0] && (
										<Link to="/products" className="redirect">
											view items
											<CgArrowLongRight style={{ fontSize: "20px" }} />
										</Link>
									)}
								</div>
							</div>
						)}
					</div>
					<div
						className="home__gallery-section__body__item__subitem"
						style={{ backgroundImage: galleryItems && galleryItems[1] && galleryItems[1].image ? `url(${CONSTANTS.BASE_URL}${galleryItems[1].image})` : `url(${defaultGalleryImage.image})` }}
					>
						<div className="overlayy"></div>
						{galleryItems && galleryItems[1] && (
							<div className="content">
								<div className={`content__icon`}>
									<img src={activemenuicon} />
								</div>
								<div className="content__body">
									<span className="title">{galleryItems && galleryItems[1] && galleryItems[1].name ? `${galleryItems[1].name}` : `unknown`}</span>
									<div className="separator"></div>
									{galleryItems && galleryItems[1] && (
										<Link to="/products" className="redirect">
											view items
											<CgArrowLongRight style={{ fontSize: "20px" }} />
										</Link>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="home__gallery-section__body__item">
					<div
						className="home__gallery-section__body__item__subitem"
						style={{ backgroundImage: galleryItems && galleryItems[2] && galleryItems[2].image ? `url(${CONSTANTS.BASE_URL}${galleryItems[2].image})` : `url(${defaultGalleryImage.image})` }}
					>
						<div className="overlayy"></div>
						{galleryItems && galleryItems[2] && (
							<div className="content">
								<div className={`content__icon`}>
									<img src={activemenuicon} />
								</div>
								<div className="content__body">
									<span className="title">{galleryItems && galleryItems[2] && galleryItems[2].name ? `${galleryItems[2].name}` : `unknown`}</span>
									<div className="separator"></div>
									{galleryItems && galleryItems[2] && (
										<Link to="/products" className="redirect">
											view items
											<CgArrowLongRight style={{ fontSize: "20px" }} />
										</Link>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="home__gallery-section__body__item">
					<div
						className="home__gallery-section__body__item__subitem"
						style={{ backgroundImage: galleryItems && galleryItems[3] && galleryItems[3].image ? `url(${CONSTANTS.BASE_URL}${galleryItems[3].image})` : `url(${defaultGalleryImage.image})` }}
					>
						<div className="overlayy"></div>
						{galleryItems && galleryItems[3] && (
							<div className="content">
								<div className={`content__icon`}>
									<img src={activemenuicon} />
								</div>
								<div className="content__body">
									<span className="title">{galleryItems && galleryItems[3] && galleryItems[3].name ? `${galleryItems[3].name}` : `unknown`}</span>
									<div className="separator"></div>
									{galleryItems && galleryItems[3] && (
										<Link to="/products" className="redirect">
											view items
											<CgArrowLongRight style={{ fontSize: "20px" }} />
										</Link>
									)}
								</div>
							</div>
						)}
					</div>
					<div
						className="home__gallery-section__body__item__subitem"
						style={{ backgroundImage: galleryItems && galleryItems[4] && galleryItems[4].image ? `url(${CONSTANTS.BASE_URL}${galleryItems[4].image})` : `url(${defaultGalleryImage.image})` }}
					>
						<div className="overlayy"></div>
						{galleryItems && galleryItems[4] && (
							<div className="content">
								<div className={`content__icon`}>
									<img src={activemenuicon} />
								</div>
								<div className="content__body">
									<span className="title">{galleryItems && galleryItems[4] && galleryItems[4].name ? `${galleryItems[4].name}` : `unknown`}</span>
									<div className="separator"></div>
									{galleryItems && galleryItems[4] && (
										<Link to="/products" className="redirect">
											view items
											<CgArrowLongRight style={{ fontSize: "20px" }} />
										</Link>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="home__gallery-section__body__item">
					<div
						className="home__gallery-section__body__item__subitem"
						style={{ backgroundImage: galleryItems && galleryItems[5] && galleryItems[5].image ? `url(${CONSTANTS.BASE_URL}${galleryItems[5].image})` : `url(${defaultGalleryImage.image})` }}
					>
						<div className="overlayy"></div>
						{galleryItems && galleryItems[5] && (
							<div className="content">
								<div className={`content__icon`}>
									<img src={activemenuicon} />
								</div>
								<div className="content__body">
									<span className="title">{galleryItems && galleryItems[5] && galleryItems[5].name ? `${galleryItems[5].name}` : `unknown`}</span>
									<div className="separator"></div>
									{galleryItems && galleryItems[5] && (
										<Link to="/products" className="redirect">
											view items
											<CgArrowLongRight style={{ fontSize: "20px" }} />
										</Link>
									)}
								</div>
							</div>
						)}
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
