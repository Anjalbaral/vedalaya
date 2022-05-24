import React from "react";
import productimage from "../assets/images/productA.png";
import { Link, useNavigate } from "react-router-dom";
import { DiMaterializecss } from "react-icons/di";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ProductDetails = () => {
	const navigate = useNavigate();

	return (
		<div className="product-details">
			<div className="product-details__nav-info">
				<Link to="/products" style={{ paddingRight: "4px" }}>
					category
				</Link>{" "}
				<span>/ green wood-glass window</span>
			</div>
			<div className="divider"></div>
			<div className="product-details__body">
				<div className="product-details__body__left">
					<div className="product-image" style={{ backgroundImage: `url(${productimage})` }}></div>
				</div>
				<div className="product-details__body__right">
					<div className="product-details__body__right__header">Green wood-glass window</div>
					<div className="separator"></div>
					<br />
					<div className="product-details__body__right__category" style={{ width: "100%" }}>
						<div className="port-item">
							<div className="port-item__title">
								<span>Category</span>
							</div>
							<div className="port-item__date" style={{ width: "100%" }}>
								<div className="dot"></div>
								<span style={{ marginLeft: "5px" }}>UPVC windows and doors</span>
							</div>
						</div>
					</div>
					<div className="divider"></div>
					<div className="product-details__body__right__description">
						<div className="product-details__body__right__description__header">
							<span>Description</span>
						</div>
						<div className="product-details__body__right__description__content">
							<span>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
								aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
								reprehenderit qui in ea voluptate
							</span>
						</div>
						<br />
						<button
							onClick={() => {
								navigate("/contact");
							}}
							className="btn btn-primary rounded"
						>
							Contact us for more info <HiOutlineArrowNarrowRight style={{ marginLeft: "5px", fontSize: "20px" }} />
						</button>
						<br />
					</div>
					<div className="divider"></div>
					<div className="product-details__body__right__timeline">
						<div className="port-item">
							<div className="port-item__title">
								<span>Colors</span>
							</div>
							<div className="port-item__date">
								<div className="color red"></div> RED
							</div>
							<div className="port-item__date">
								<div className="color blue"></div> BLUE
							</div>
							<div className="port-item__date">
								<div className="color brown"></div> BROWN
							</div>
						</div>
						<div className="port-item">
							<div className="port-item__title">
								<span>Materials</span>
							</div>
							<div className="port-item__date">
								<DiMaterializecss /> WOOD
							</div>
							<div className="port-item__date">
								<DiMaterializecss /> METAL
							</div>
							<div className="port-item__date">
								<DiMaterializecss />
								CEMENT
							</div>
						</div>
					</div>
					<div className="divider"></div>
					<div className="product-details__body__right__description__header" style={{ padding: "15px 0px 5px 0px" }}>
						<span>Sample Images</span>
					</div>
					<div className="product-details__body__right__images">
						<div
							onClick={() => window.open("https://www.pellabranch.com/webres/Image/misc/woman-drinking-coffee-bay-window.jpg", "_blank")}
							className="product-details__body__right__images__image"
							style={{ backgroundImage: `url(https://thumbs.dreamstime.com/b/open-window-to-back-yard-small-shed-23300174.jpg)` }}
						></div>
						<div className="product-details__body__right__images__image" style={{ backgroundImage: `url(https://www.pellabranch.com/webres/Image/misc/woman-drinking-coffee-bay-window.jpg)` }}></div>
						<div
							onClick={() => window.open("https://www.pellabranch.com/webres/Image/misc/woman-drinking-coffee-bay-window.jpg", "_blank")}
							className="product-details__body__right__images__image"
							style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/a/a4/2014_K%C5%82odzko%2C_pl._Chrobrego_13_03.JPG)` }}
						></div>
						<div
							onClick={() => window.open("https://www.pellabranch.com/webres/Image/misc/woman-drinking-coffee-bay-window.jpg", "_blank")}
							className="product-details__body__right__images__image"
							style={{ backgroundImage: `url(https://legacyusa.com/wp-content/uploads/2019/11/Window-to-an-Existing-Wall.jpg)` }}
						></div>
						<div
							onClick={() => window.open("https://www.pellabranch.com/webres/Image/misc/woman-drinking-coffee-bay-window.jpg", "_blank")}
							className="product-details__body__right__images__image"
							style={{ backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/window-box-1582665098.jpeg?crop=1.00xw:0.801xh;0,0&resize=640:*)` }}
						></div>
						<div
							onClick={() => window.open("https://www.pellabranch.com/webres/Image/misc/woman-drinking-coffee-bay-window.jpg", "_blank")}
							className="product-details__body__right__images__image"
							style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurhYTLLsPSUUk_zcumNNi9TEFAPlqnqyxjF18E58CSrCTpBaZNAsywIUGBqsK8iCXY6A&usqp=CAU)` }}
						></div>
					</div>
					<br />
					<div className="divider"></div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
