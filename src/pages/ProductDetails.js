import React, { useState, useEffect } from "react";
import productimage from "../assets/images/productA.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DiMaterializecss } from "react-icons/di";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { getProductDetails } from "../api/products";
import fireSpark from "../helpers/spark";
import parse from "html-react-parser";
import DotLoader from "../components/Reusable/DotLoader";

const ProductDetails = () => {
	const navigate = useNavigate();
	const [productDetails, setProductDetails] = useState({});
	const [loading, setLoading] = useState(true);
	const params = useParams();

	const _getProductDetails = (query, signal) => {
		setLoading(true);
		getProductDetails(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setProductDetails({ ...res.json });
					setLoading(false);
				} else {
					fireSpark("error", "Failed to get product details!");
				}
			})
			.catch((err) => {
				fireSpark("error", "Failed to get product details!");
			});
	};

	useEffect(() => {
		const controller = new AbortController();

		let productid = params.id;

		_getProductDetails(`${productid}/`);

		return () => {
			controller.abort();
		};
	}, []);

	if (loading) {
		return (
			<div className="product-details" style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
				<div style={{ marginTop: "0px", width: "100%", height: "100px", display: "flex", padding: "60px 0 0px 0" }}>
					<DotLoader />
				</div>
			</div>
		);
	}
	return (
		<div className="product-details">
			<div className="product-details__nav-info">
				<Link to="/products" style={{ paddingRight: "4px" }}>
					category
				</Link>{" "}
				<span>/ {productDetails && productDetails.category_details && productDetails.category_details.name ? productDetails.category_details.name : "unknown"}</span>
			</div>
			<div className="divider"></div>
			<div className="product-details__body">
				<div className="product-details__body__left">
					<div
						className="product-image"
						style={{
							backgroundImage: `url(${
								productDetails && productDetails.images_details && productDetails.images_details[0] && productDetails.images_details[0].image
									? productDetails.images_details[0].image
									: `http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png`
							})`
						}}
					></div>
				</div>
				<div className="product-details__body__right">
					<div className="product-details__body__right__header">{productDetails && productDetails.name ? productDetails.name : "unknown"}</div>
					<div className="separator"></div>
					<br />
					<div className="product-details__body__right__category" style={{ width: "100%" }}>
						<div className="port-item">
							<div className="port-item__title">
								<span>Category</span>
							</div>
							<div className="port-item__date" style={{ width: "100%" }}>
								<div className="dot"></div>
								<span style={{ marginLeft: "5px" }}>
									{productDetails && productDetails.category_details && productDetails.category_details.name ? productDetails.category_details.name : "unknown"}
								</span>
							</div>
						</div>
					</div>
					<div className="divider"></div>
					<div className="product-details__body__right__description">
						<div className="product-details__body__right__description__header">
							<span>Description</span>
						</div>
						<div className="product-details__body__right__description__content">
							<span>{productDetails && productDetails.description ? parse(productDetails.description) : ""}</span>
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
							{productDetails &&
								productDetails.colors_details &&
								productDetails.colors_details.map((col) => {
									return (
										<div className="port-item__date">
											<div className="color" style={{ backgroundColor: col.hex_code ? col.hex_code : "gray" }}></div> {col && col.name ? col.name.toUpperCase() : ""}
										</div>
									);
								})}
						</div>
						<div className="port-item">
							<div className="port-item__title">
								<span>Materials</span>
							</div>
							{productDetails &&
								productDetails.materials_details &&
								productDetails.materials_details.map((pm) => {
									return (
										<div className="port-item__date">
											<DiMaterializecss /> {pm.name ? pm.name.toUpperCase() : ""}
										</div>
									);
								})}
						</div>
					</div>
					<div className="divider"></div>
					<div className="product-details__body__right__description__header" style={{ padding: "15px 0px 5px 0px" }}>
						<span>Sample Images</span>
					</div>
					<div className="product-details__body__right__images">
						{productDetails &&
							productDetails.images_details &&
							productDetails.images_details.map((pid, key) => {
								return <div key={key} onClick={() => window.open(pid.image, "_blank")} className="product-details__body__right__images__image" style={{ backgroundImage: `url(${pid.image})` }}></div>;
							})}
					</div>
					<br />
					<div className="divider"></div>
					<div className="product-details__body__right__description__header" style={{ padding: "15px 0px 5px 0px" }}>
						<span>Similar Products</span>
					</div>
					<div className="products__body__product-list" style={{ padding: "10px 0px 0px 0px" }}>
						{productDetails &&
							productDetails.recommended_details &&
							productDetails.recommended_details.map((dat, ind) => {
								return (
									<div key={ind} class="recomendation-card" style={{ marginLeft: ind !== 0 ? "10px" : "10px", marginRight: ind !== 0 ? "10px" : "10px" }}>
										<nav>
											PRODUCT TYPE : <b style={{ marginLeft: "5px" }}>{dat && dat.materials_details && dat.materials_details[0] ? dat.materials_details[0].name : "unknown"}</b>
										</nav>
										<div className="content" style={{ display: "flex", flexDirection: "column" }}>
											<div
												class="photo"
												style={{
													backgroundImage: `${
														dat && dat.images_details && dat.images_details[0] ? `url(${dat.images_details[0].image})` : `url(http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png)`
													}`
												}}
											></div>
											<div class="description">
												<h1>{dat && dat.name ? dat.name : "unknown"}</h1>
												<h2 style={{ padding: "5px 0px 5px 0px" }}>{dat && dat.colors && dat.colors[0] ? dat.colors_details[0].name : "none"}</h2>
												<p>{dat && dat.description ? parse(dat.description.substring(0, 95)) : "none"}</p>
												<div className="button-group">
													<button
														onClick={() => {
															navigate(`/product/${dat.id}`);
														}}
														className="btn-primary-outlined"
													>
														Details
													</button>
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
