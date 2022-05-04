import React from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { CgArrowLongRight } from "react-icons/cg";
import activemenuicon from "../../assets/images/activemenuicon.png";

const galleryData = [
	{ id: 1, title: "image A", description: "this is dummy image", image: "https://5.imimg.com/data5/LH/UD/BQ/SELLER-41968702/interior-decoration-500x500.jpg" },
	{ id: 2, title: "image B", description: "this is dummy image", image: "https://5.imimg.com/data5/XN/CO/CK/SELLER-42874186/ceiling-design-with-jaali-pattern-500x500.jpg" },
	{ id: 3, title: "image C", description: "this is dummy image", image: "https://3.imimg.com/data3/BV/II/MY-12383910/living-area-interior-design-500x500.jpg" },
	{ id: 4, title: "image D", description: "this is dummy image", image: "https://5.imimg.com/data5/SELLER/Default/2021/2/FS/FB/JT/12827755/living-room-interior-designing-500x500.png" },
	{ id: 5, title: "image E", description: "this is dummy image", image: "https://www.impressiveinteriordesign.com/wp-content/uploads/2016/08/Exterior-Design-Tips-Everybody-Should-Follow11.jpg" },
	{ id: 6, title: "image F", description: "this is dummy image", image: "https://4.imimg.com/data4/EK/BF/MY-14696750/exterior-design-3d-500x500.jpg" },
	{ id: 7, title: "image G", description: "this is dummy image", image: "https://5.imimg.com/data5/SELLER/Default/2021/2/FS/FB/JT/12827755/living-room-interior-designing-500x500.png" }
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
					with over a decade of experience in the construction and construction material industry, we provide holistic solutions for all your needs. What's more, the company also offers a construction
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
								<span className="title">{galleryData[5].title}</span>
								<span className="description">{galleryData[5].description}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home__gallery-section__bottom">
				<button className="btn-primary-outlined">
					Explore More <CgArrowLongRight />
				</button>
			</div>
		</div>
	);
}

export default GallerySection;
