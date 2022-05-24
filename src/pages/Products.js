import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import productscover from "../assets/images/productscover2.jpg";
import FilterModal from "../components/Reusable/FilterModal";
import RadioMenu from "../components/Reusable/RadioMenu";
import activemenuicon from "../assets/images/activemenuicon.png";
import { CgArrowLongRight } from "react-icons/cg";
import windowdoors from "../assets/images/window&doors-p1.jpg";
import roofing from "../assets/images/roofing-p2.jpg";
import flooring from "../assets/images/flooring-p3.jpg";
import fascia from "../assets/images/fascia-p4.jpg";
import glutter from "../assets/images/glutter.jpg";
import pipes from "../assets/images/pipes.jpg";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

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
	const [searchModal, setSearchModal] = useState(false);
	const [activeFilters, setActiveFilters] = useState({
		...defaultFilters
	});
	const navigate = useNavigate();
	const [categoryMode, setCategoryMode] = useState(true);

	const [tempFilters, setTempFilters] = useState({
		...defaultFilters
	});

	const _changeFilter = (name, value) => {
		setActiveFilters({
			...activeFilters,
			[name]: value
		});
		setTempFilters({
			...activeFilters,
			[name]: value
		});
	};

	const _changeTempFilters = (name, value) => {
		setTempFilters({
			...tempFilters,
			[name]: value
		});
	};

	const _search = (e) => {
		setSearchText(e.target.value);
	};

	const toggleModal = () => {
		setSearchModal(!searchModal);
		setTempFilters({ ...defaultFilters });
	};

	useEffect(() => {
		if (searchText.length > 0) {
			setCategoryMode(false);
		} else {
			setCategoryMode(true);
		}
	}, [searchText]);

	let isMobile = window.innerWidth < 700;

	return (
		<div className="products">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: isMobile ? "300%" : "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				bgImage={productscover}
			>
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
						<RadioMenu defaultActiveKey="0" name="size" active={activeFilters.size} onChange={_changeFilter} options={sizes} header="Size" />
						<RadioMenu defaultActiveKey="0" name="color" active={activeFilters.color} onChange={_changeFilter} options={colors} header="Color" />
						<RadioMenu defaultActiveKey="0" name="material" active={activeFilters.material} onChange={_changeFilter} options={materials} header="Material" />
					</div>
				)}

				{categoryMode ? (
					<div className="products__body__cat">
						<div className="products__body__cat__intro">
							<span>Search from any of Categories below</span>
							<div className="separator" style={{ marginTop: "5px" }}></div>
						</div>
						<div className="products__body__cat__category-mode">
							{categoryData.map((dat, ind) => {
								return (
									<div className="products__body__cat__category-mode__item">
										<div className="products__body__cat__category-mode__item__subitem" style={{ backgroundImage: `url(${dat.image})` }}>
											<div className="overlayy"></div>
											<div className="content">
												<div className="content__body">
													<span
														onClick={() => {
															setCategoryMode(false);
														}}
														className="redirect"
													>
														view products
														<CgArrowLongRight style={{ fontSize: "20px" }} />
													</span>
													<div className="separator"></div>
													<span className="title">{dat.title}</span>
													<span className="description">{dat.description}</span>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				) : null}
				<div className="products__body__product-list">
					{!categoryMode &&
						productsList.map((dat, ind) => {
							return (
								<div class="card">
									<nav>
										PRODUCT TYPE : <b style={{ marginLeft: "5px" }}>{dat.type}</b>
									</nav>
									<div className="content">
										<div class="photo">
											<img src={dat.image} />
										</div>
										<div class="description">
											<h1>{dat.title}</h1>
											<h2>{dat.color}</h2>
											<p>{dat.description}</p>
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
			<div
				onClick={() => {
					setSearchModal(true);
				}}
				style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				<div className="products__float-btn">Filters</div>
			</div>
			<FilterModal openmodal={searchModal} toggleModal={setSearchModal}>
				<RadioMenu defaultActiveKey="" name="size" active={tempFilters.size} onChange={_changeTempFilters} options={sizes} header="Size" />
				<div className="separator"></div>
				<RadioMenu defaultActiveKey="" name="color" active={tempFilters.color} onChange={_changeTempFilters} options={colors} header="Color" />
				<div className="separator"></div>
				<RadioMenu defaultActiveKey="" name="material" active={tempFilters.material} onChange={_changeTempFilters} options={materials} header="Material" />
				<div className="filter-modal-btn">
					<button
						onClick={() => {
							setActiveFilters({ ...tempFilters });
							setSearchModal(false);
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
