import React, { useState } from "react";
import { Parallax } from "react-parallax";
import productscover from "../assets/images/productscover.jpg";

function Products() {
	const [searchText, setSearchText] = useState("");

	const _search = (e) => {
		console.log("e.target.value:", e.target.value);
		setSearchText(e.target.value);
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
			<div className="products__body">{/* <div className="products__body__filters"></div> */}</div>
		</div>
	);
}

export default Products;
