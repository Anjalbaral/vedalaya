import React from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { CgArrowLongRight } from "react-icons/cg";
import activemenuicon from "../../assets/images/activemenuicon.png";

const galleryData = [
	{ id: 1, title: "image A", image: "https://5.imimg.com/data5/LH/UD/BQ/SELLER-41968702/interior-decoration-500x500.jpg" },
	{ id: 2, title: "image B", image: "https://5.imimg.com/data5/XN/CO/CK/SELLER-42874186/ceiling-design-with-jaali-pattern-500x500.jpg" },
	{ id: 3, title: "image C", image: "https://3.imimg.com/data3/BV/II/MY-12383910/living-area-interior-design-500x500.jpg" },
	{ id: 4, title: "image D", image: "https://5.imimg.com/data5/SELLER/Default/2021/2/FS/FB/JT/12827755/living-room-interior-designing-500x500.png" },
	{ id: 5, title: "image E", image: "https://www.impressiveinteriordesign.com/wp-content/uploads/2016/08/Exterior-Design-Tips-Everybody-Should-Follow11.jpg" },
	{ id: 6, title: "image F", image: "https://4.imimg.com/data4/EK/BF/MY-14696750/exterior-design-3d-500x500.jpg" },
	{ id: 7, title: "image G", image: "https://5.imimg.com/data5/SELLER/Default/2021/2/FS/FB/JT/12827755/living-room-interior-designing-500x500.png" },
	{ id: 8, title: "image H", image: "https://www.impressiveinteriordesign.com/wp-content/uploads/2016/08/Exterior-Design-Tips-Everybody-Should-Follow11.jpg" }
];

function GallerySection() {
	return (
		<div className="home__gallery-section">
			{/* HEAD SECTION */}
			<div className="home__gallery-section__header">
				<span>OUR PRODUCT GALLERY</span>
			</div>
			<div className="home__gallery-section__head-content">
				<span>
					with over a decade of experience in the construction and construction material industry, we provide holistic solutions for all your needs. What's more, the company also offers a construction
					consultation service that helps you to plan your project from inception to closure.
				</span>
			</div>
			<div className="home__gallery-tab">
				<div>
					<span>All</span>
				</div>
				<div>
					<span></span>
				</div>
			</div>
			{/* gallery iamges */}
			<div className="gallery">
				{galleryData.map((data, index) => {
					let isEven = data.id % 2 === 0;
					return (
						<>
							<div key={index} className={`gallery__item ${isEven ? "w-2 h-1" : "w-2 h-2"}`}>
								<div className="image">
									<div className="overlay"></div>
									<div className="imagecontent">
										<div className="imagecontent__left">
											<img src={activemenuicon} />
										</div>
										<div className="imagecontent__right">{data.title}</div>
									</div>
									<img src={data.image} />
								</div>
							</div>
						</>
					);
				})}
			</div>
			<div className="home__gallery-section__bottom">
				<button className="btn-primary-outlined">
					View More <CgArrowLongRight />
				</button>
			</div>
		</div>
	);
}

export default GallerySection;
