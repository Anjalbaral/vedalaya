import React, { useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";
import productscover from "../assets/images/productscover2.jpg";
import FilterModal from "../components/Reusable/FilterModal";
import RadioMenu from "../components/Reusable/RadioMenu";
import activemenuicon from "../assets/images/activemenuicon.png";
import { CgArrowLongRight, CgArrowsExchangeAlt } from "react-icons/cg";
import windowdoors from "../assets/images/window&doors-p1.jpg";
import roofing from "../assets/images/roofing-p2.jpg";
import flooring from "../assets/images/flooring-p3.jpg";
import fascia from "../assets/images/fascia-p4.jpg";
import glutter from "../assets/images/glutter.jpg";
import pipes from "../assets/images/pipes.jpg";
import { useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import { HiArrowNarrowLeft, HiTemplate } from "react-icons/hi";
import { useSelector } from "react-redux";
import { getProductCategories, getProductItems, getProductColors, getProductSizes, getProductMaterials } from "../api/products";
import { MdOutlineCategory, MdOutlineArrowRightAlt } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import { BsArrowRight, BsArrowClockwise } from "react-icons/bs";
import DotLoader from "../components/Reusable/DotLoader";
import isEmpty from "../helpers/isEmpty";
import EmptyComp from "../components/Reusable/Empty";
import Paging from "../components/Reusable/Paging";
import parse from "html-react-parser";

const sizes = [{ label: "Small", value: "small", name: "small" }, { label: "Medium", value: "medium", name: "medium" }, { label: "Large", value: "large", name: "large" }];
const colors = [
	{ label: "Red", value: "red", name: "red", colorcode: "red" },
	{ label: "Green", value: "green", name: "green", colorcode: "green" },
	{ label: "Yellow", value: "yellow", name: "yellow", colorcode: "yellow" }
];

const materials = [{ label: "Wood", value: "wood", name: "wood" }, { label: "Metal", value: "metal", name: "metal" }, { label: "Aluminium", value: "aluminium", name: "aluminium" }];
const categoryData = [
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
	}
];

const productsList = [
	{
		id: 1,
		type: "DOOR",
		title: "Product A",
		color: "red",
		image: "https://tricitypropertysearches.com/wp-content/uploads/2021/08/perfect-door-designs.jpg",
		description: "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick."
	},
	{
		id: 2,
		type: "WINDOW",
		title: "Product B",
		color: "red",
		image: "https://media.istockphoto.com/photos/white-doubleleafed-door-of-classical-design-picture-id1058525596?k=20&m=1058525596&s=612x612&w=0&h=95amup2jV9wD9nuzwGxUU-VRk-YUP3WYzxEaMWkbxcU=",
		description: "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick."
	},
	{
		id: 3,
		type: "GATE",
		title: "Product C",
		color: "red",
		image: "https://www.chinapivotdoor.com/wp-content/uploads/2019/04/Simple-Teak-Color-Wood-Main-Entry-Composite-Door-Design-2.jpg",
		description: "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick."
	},
	{
		id: 4,
		type: "STATUE",
		title: "Product D",
		color: "red",
		image: "https://www.decorchamp.com/wp-content/uploads/2017/02/main-gate-design-ideas-indi-1200x1038.jpg",
		description: "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick."
	},
	{
		id: 5,
		type: "LIGHT",
		title: "Product E",
		color: "red",
		image: "https://www.homelane.com/blog/wp-content/uploads/2020/03/shutterstock_374660689-1.jpg",
		description: "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick."
	},
	{
		id: 6,
		type: "STATUE",
		title: "Product F",
		color: "red",
		image: "https://noorfurnishers.com/wp-content/uploads/2021/03/Design-Wooden-Doors.webp",
		description: "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick."
	},
	{
		id: 7,
		type: "LIGHT",
		title: "Product G",
		color: "red",
		image: "https://xtremeedeals.com/wp-content/uploads/2020/11/architecture-metal-doors.jpg",
		description: "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick."
	}
];

const defaultFilters = {
	color: [],
	size: [],
	material: []
};

function Products() {
	const [searchText, setSearchText] = useState("");
	const [loading, setLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchModal, setSearchModal] = useState(false);
	const [activeFilters, setActiveFilters] = useState({
		...defaultFilters
	});
	const [instanceCount, setInstanceCount] = useState(0);
	const [categoryList, setCategoryList] = useState([]);
	const [productList, setProductList] = useState([]);
	const navigate = useNavigate();
	const [activeCategory, setActiveCategory] = useState("");
	const [categoryMode, setCategoryMode] = useState(true);
	const [categoryLoading, setCategoryLoading] = useState(true);
	const [tempFilters, setTempFilters] = useState({
		...defaultFilters
	});

	const [productColors, setProductColors] = useState([]);
	const [productSizes, setProductSizes] = useState([]);
	const [productMaterials, setProductMaterials] = useState([]);

	const [productData, setProductData] = useState({});
	const productCover = useSelector((state) => state.main.coverData);
	let filteredData = productCover.filter((ac, ind) => ac.on_page === "products");
	let currentPage = searchParams.get("page") ? searchParams.get("page") : 1;
	const { state } = useLocation();

	useEffect(() => {
		if (filteredData[0]) {
			let isVideo = filteredData[0].content.slice(-3) === "mp4";
			setProductData({ ...filteredData[0], isVideo: isVideo });
		}
	}, []);

	// useEffect(() => {
	// 	if (state && state.isCategory) {
	// 		setCategoryMode(false);
	// 		setActiveCategory(state.acCategory);
	// 	} else {
	// 		setCategoryMode(true);
	// 	}
	// }, [state]);

	const _changeFilter = (name, value) => {
		searchParams.set("page", 1);
		setSearchParams(searchParams);
		setProductList([]);
		setActiveFilters({
			...activeFilters,
			[name]: value
		});
		setTempFilters({
			...activeFilters,
			[name]: value
		});
	};

	useEffect(() => {
		let categoryParam = searchParams.get("category");
		let search = searchParams.get("search");
		if (search && search.length > 0) {
			setSearchText(search);
		}
		if (categoryParam && categoryParam.length > 0) {
			setProductList([]);
			setActiveCategory(categoryParam);
			setCategoryMode(false);
		}
	}, [searchParams]);

	const _changeTempFilters = (name, value) => {
		setTempFilters({
			...tempFilters,
			[name]: value
		});
	};

	const _getProductColors = (signal) => {
		getProductColors("/", signal)
			.then((res) => {
				if (res.response.ok) {
					setProductColors(res.json.results.map((pc) => ({ label: pc.name, value: pc.id, name: pc.name, colorcode: pc.hex_code ? pc.hex_code : "gray" })));
				}
			})
			.catch((err) => {
				//   error handling
			});
	};

	const _getProductSizes = (signal) => {
		getProductSizes("/", signal)
			.then((res) => {
				if (res.response.ok) {
					setProductSizes(res.json.results.map((pc) => ({ label: `${pc.width}*${pc.height} ${pc.unit.slice(0, 3)}`, value: pc.id, name: `${pc.width}*${pc.height}${pc.unit.slice(0, 3)}` })));
				}
			})
			.catch((err) => {
				//   error handling
			});
	};

	const _getProductMaterials = (signal) => {
		getProductMaterials("/", signal)
			.then((res) => {
				if (res.response.ok) {
					setProductMaterials(res.json.results.map((pc) => ({ label: pc.name, value: pc.id, name: pc.name })));
				}
			})
			.catch((err) => {
				//   error handling
			});
	};

	useEffect(() => {
		let controller = new AbortController();
		_getProductColors(controller.signal);
		_getProductMaterials(controller.signal);
		_getProductSizes(controller.signal);
		return () => controller.abort();
	}, []);

	const _search = (e) => {
		setSearchText(e.target.value);
		searchParams.set("page", 1);
		if (e.target.value.length === 0) {
			searchParams.delete("search");
		} else {
			setProductList([]);
			searchParams.set("search", e.target.value);
		}
		setSearchParams(searchParams);
	};

	const toggleModal = () => {
		setSearchModal(!searchModal);
	};

	const _getProductCategories = (query, signal) => {
		setCategoryLoading(true);
		getProductCategories(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setCategoryLoading(false);
					setCategoryList(res.json.results);
				}
			})
			.catch((err) => {
				//  error handling
			});
	};

	const _getProductItems = (query, signal) => {
		setLoading(true);
		getProductItems(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setInstanceCount(res.json.count);
					setProductList([...productList, ...res.json.results]);
				}
			})
			.catch((err) => {
				//  error handling
			});
	};

	useEffect(() => {
		const controller = new AbortController();

		let filterQuery = "";
		if (!isEmpty(activeFilters.color)) {
			let colorIds = activeFilters.color;
			filterQuery += `&colors=${String(colorIds)}`;
		}

		if (!isEmpty(activeFilters.size)) {
			let sizeIds = activeFilters.size;
			filterQuery += `&sizes=${String(sizeIds)}`;
		}

		if (!isEmpty(activeFilters.material)) {
			let materialIds = activeFilters.material;
			filterQuery += `&materials=${String(materialIds)}`;
		}

		let pageQuery = `page=${currentPage}`;

		if (categoryMode) {
			if (searchText && searchText.length > 0) {
				// get all products
				setCategoryMode(false);
				_getProductItems(`/?search=${searchText}${filterQuery}&${pageQuery}`, controller.signal);
			} else {
				_getProductCategories("/", controller.signal);
			}
		} else {
			if (searchText && searchText.length > 0) {
				// get products with text an category
				if (activeCategory === null) {
					_getProductItems(`/?search=${searchText}${filterQuery}&${pageQuery}`, controller.signal);
				} else {
					_getProductItems(`/?category=${activeCategory}&search=${searchText}${filterQuery}&${pageQuery}`, controller.signal);
				}
			} else {
				// get products with category
				if (activeCategory === null) {
					_getProductItems(`/${filterQuery ? filterQuery.substring(1) : ""}&${pageQuery}`, controller.signal);
				} else {
					_getProductItems(`/?category=${activeCategory}${filterQuery}&${pageQuery}`, controller.signal);
				}
			}
		}
		return () => {
			controller.abort();
		};
	}, [searchText, activeCategory, categoryMode, activeFilters, currentPage]);

	const _reloadCategory = () => {
		_getProductCategories("/");
	};

	let categoryName = "";
	if (activeCategory && categoryList && categoryList.length > 0) {
		let cats = categoryList.filter((cl) => cl.id.toString() === activeCategory.toString());
		if (cats.length > 0) {
			categoryName = cats[0].name;
		}
	}

	let isMobile = window.innerWidth < 700;
	return (
		<div className="products">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%", borderBottomStyle: "solid", borderBottomWidth: "3px", borderColor: "#F1C12D" }}
				blur={{ min: 0, max: 0 }}
				strength={0}
				bgClassName="parallexComp"
				bgImageStyle={{ width: isMobile ? "300%" : "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				// bgImage={productData && productData.content ? productData.content : productscover}
			>
				<Background className="custom-bg custom-cover">
					{productData && productData.isVideo ? (
						<video src={productData && productData.content ? productData.content : productscover} autoPlay muted loop />
					) : (
						<img src={productData && productData.content ? productData.content : productscover} />
					)}
				</Background>
				<div className="expertise__cover">
					<div className="expertise__cover__overlay"></div>
					<div className="expertise__cover__content">
						<h3>Our Products</h3>
						<span>find all our products here</span>
					</div>
				</div>
			</Parallax>
			<div className="products__search">
				{!categoryMode && (
					<div
						onClick={() => {
							searchParams.delete("category");
							searchParams.delete("search");
							searchParams.delete("page");
							setSearchText("");
							setActiveCategory(null);
							setSearchParams(searchParams);
							setCategoryMode(true);
						}}
					>
						<HiArrowNarrowLeft />
					</div>
				)}
				<input type="text" value={searchText} onChange={_search} placeholder="Search Product" />
			</div>
			<div className="products__body">
				{!categoryMode && (
					<div className="products__body__filters">
						<div className="head">Apply Filters</div>
						<RadioMenu defaultActiveKey="0" name="size" active={activeFilters.size} onChange={_changeFilter} options={productSizes} header="Size" />
						<RadioMenu defaultActiveKey="0" name="color" active={activeFilters.color} onChange={_changeFilter} options={productColors} header="Color" />
						<RadioMenu defaultActiveKey="0" name="material" active={activeFilters.material} onChange={_changeFilter} options={productMaterials} header="Material" />
					</div>
				)}

				{categoryMode ? (
					<div className="products__body__cat">
						<div className="products__body__cat__intro">
							<span>Search from any of Categories below</span>
							<div className="separator" style={{ marginTop: "5px" }}></div>
						</div>
						{categoryLoading ? (
							<div style={{ marginTop: "0px", width: "100%", height: "100px", display: "flex", padding: "60px 0 0px 0" }}>
								<DotLoader />
							</div>
						) : isEmpty(categoryList) ? (
							<EmptyComp>No categories</EmptyComp>
						) : (
							<div className="products__body__cat__category-mode">
								{/* default section open */}
								<div className="products__body__cat__category-mode__default-item">
									<div className="home__gallery-section__body__default-item__subitem">
										<BsArrowClockwise onClick={_reloadCategory} />
										<p>-- reload --</p>
										<span>All Categories</span>
										<div className="separator"></div>
									</div>
								</div>
								{/* default section close */}
								{categoryList &&
									categoryList.map((dat, ind) => {
										return (
											<div key={ind} className="products__body__cat__category-mode__item">
												<div
													className="home__gallery-section__body__item__subitem"
													style={{ backgroundImage: dat.image ? `url(${dat.image})` : `url(http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png)`, borderRadius: "15px" }}
												>
													<div className="overlayy"></div>
													<div className="content">
														<div className={`content__icon`}>
															<img src={activemenuicon} />
														</div>
														<div className="content__body">
															<span className="title">{dat && dat.name ? dat.name : `unknown`}</span>
															<div className="separator"></div>
															{dat && (
																<span
																	onClick={() => {
																		setCategoryMode(false);
																		setProductList([]);
																		searchParams.set("category", dat.id);
																		setSearchParams(searchParams);
																	}}
																	className="redirect"
																>
																	view items
																	<CgArrowLongRight style={{ fontSize: "20px" }} />
																</span>
															)}
														</div>
													</div>
												</div>
											</div>
										);
									})}
							</div>
						)}
					</div>
				) : null}
				<div className="products__body__product-list" style={{ display: "flex", flexDirection: "column" }}>
					{!categoryMode && (
						<>
							<div className="product-list-title" style={{ paddingLeft: "15px", paddingBottom: "10px" }}>
								<span>
									<b>Category</b> : {activeCategory ? categoryName : "all"}
								</span>
							</div>
							<div className="divider"></div>
						</>
					)}
					<div className="products__body__product-list">
						{loading && !categoryMode && (
							<div style={{ marginTop: "0px", width: "100%", height: "100px", display: "flex", padding: "60px 0 0px 0" }}>
								<DotLoader />
							</div>
						)}

						{isEmpty(productList) && !categoryMode && !loading && <EmptyComp>No any products</EmptyComp>}

						{!categoryMode &&
							productList.map((dat, ind) => {
								return (
									<div key={ind} class="card">
										<nav>
											PRODUCT TYPE : <b style={{ marginLeft: "5px" }}>{dat && dat.materials_details && dat.materials_details[0] ? dat.materials_details[0].name : "unknown"}</b>
										</nav>
										<div className="content">
											<div class="photo">
												<img src={dat && dat.images_details && dat.images_details[0] ? dat.images_details[0].image : "http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png"} />
											</div>
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

						{/* {loading && !categoryMode ? (
							<div style={{ marginTop: "0px", width: "100%", height: "100px", display: "flex", padding: "60px 0 0px 0" }}>
								<DotLoader />
							</div>
						) : isEmpty(productList) && !categoryMode ? (
							<EmptyComp>No any products</EmptyComp>
						) : (
							<>
								{!categoryMode &&
									productList.map((dat, ind) => {
										return (
											<div key={ind} class="card">
												<nav>
													PRODUCT TYPE : <b style={{ marginLeft: "5px" }}>{dat && dat.materials_details && dat.materials_details[0] ? dat.materials_details[0].name : "unknown"}</b>
												</nav>
												<div className="content">
													<div class="photo">
														<img src={dat && dat.images_details && dat.images_details[0] ? dat.images_details[0].image : "http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png"} />
													</div>
													<div class="description">
														<h1>{dat && dat.category_str ? dat.category_str : "unknown"}</h1>
														<h2>{dat && dat.color && dat.color[0] ? dat.color_details[0].name : "none"}</h2>
														<p>{dat && dat.description ? dat.description : "none"}</p>
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
							</>
						)} */}
					</div>
					<br />
					<br />
					<br />
					<br />
					<div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
						{!loading && !categoryMode && !isEmpty(productList) && <Paging instanceCount={instanceCount} />}
					</div>
				</div>
			</div>
			<div
				onClick={() => {
					setSearchModal(true);
				}}
				style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				<div className="products__float-btn">Filters</div>
			</div>
			<FilterModal openmodal={searchModal} toggleModal={setSearchModal}>
				<RadioMenu defaultActiveKey="" name="size" active={tempFilters.size} onChange={_changeTempFilters} options={productSizes} header="Size" />
				<div className="separator"></div>
				<RadioMenu defaultActiveKey="" name="color" active={tempFilters.color} onChange={_changeTempFilters} options={productColors} header="Color" />
				<div className="separator"></div>
				<RadioMenu defaultActiveKey="" name="material" active={tempFilters.material} onChange={_changeTempFilters} options={productMaterials} header="Material" />
				<div className="filter-modal-btn">
					<button
						onClick={() => {
							setActiveFilters({ ...tempFilters });
							setSearchModal(false);
							setProductList([]);
						}}
						className="btn-primary"
					>
						Apply
					</button>
					<button
						className="btn-primary-outlined"
						onClick={() => {
							toggleModal();
						}}
					>
						Cancel
					</button>
				</div>
			</FilterModal>
		</div>
	);
}

export default Products;
