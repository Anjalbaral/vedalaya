import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import productscover from "../assets/images/productscover.jpg";
import FilterModal from "../components/Reusable/FilterModal";
import RadioMenu from "../components/Reusable/RadioMenu";

const sizes = [{ label: "Small", value: "small", name: "small" }, { label: "Medium", value: "medium", name: "medium" }, { label: "Large", value: "large", name: "large" }];
const colors = [
	{ label: "Red", value: "red", name: "red", colorcode: "red" },
	{ label: "Green", value: "green", name: "green", colorcode: "green" },
	{ label: "Yellow", value: "yellow", name: "yellow", colorcode: "yellow" }
];
const materials = [{ label: "Wood", value: "wood", name: "wood" }, { label: "Metal", value: "metal", name: "metal" }, { label: "Aluminium", value: "aluminium", name: "aluminium" }];

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

	return (
		<div className="products">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
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
				<input type="text" value={searchText} onChange={_search} placeholder="Search Product" />
			</div>
			<div className="products__body">
				<div className="products__body__filters">
					<div className="head">Apply Filters</div>
					<RadioMenu defaultActiveKey="0" name="size" active={activeFilters.size} onChange={_changeFilter} options={sizes} header="Size" />
					<RadioMenu defaultActiveKey="0" name="color" active={activeFilters.color} onChange={_changeFilter} options={colors} header="Color" />
					<RadioMenu defaultActiveKey="0" name="material" active={activeFilters.material} onChange={_changeFilter} options={materials} header="Material" />
				</div>
				<div className="products__body__product-list">
					{productsList.map((dat, ind) => {
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
											<button className="btn-primary-outlined">Details</button>
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
