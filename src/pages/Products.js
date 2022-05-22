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

function Products() {
	const [searchText, setSearchText] = useState("");
	const [searchModal, setSearchModal] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	const _search = (e) => {
		setSearchText(e.target.value);
	};

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
					<div className="separator"></div>
					<RadioMenu active="" options={sizes} header="Size" value="" />
					<div className="separator"></div>
					<RadioMenu active="" options={colors} header="Color" value="" />
					<div className="separator"></div>
					<RadioMenu active="" options={materials} header="Material" value="" />
				</div>
			</div>
			{!searchModal && (
				<div
					onClick={() => {
						setSearchModal(true);
					}}
					style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
				>
					<div className="products__float-btn">Filters</div>
				</div>
			)}
			<FilterModal openmodal={searchModal} toggleModal={setSearchModal} />
		</div>
	);
}

export default Products;
