import React, { useState, useEffect, useRef } from "react";
import CustomTabs from "../components/Reusable/CustomTabs";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getGalleryPageData, getGalleryCategoryData } from "../api/gallery";
import fireSpark from "../helpers/spark";
import DotLoader from "../components/Reusable/DotLoader";
import isEmpty from "../helpers/isEmpty";
import EmptyComp from "../components/Reusable/Empty";
import Paging from "../components/Reusable/Paging";

const all = [
	{
		id: 1,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "image a",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 2,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "image b",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 3,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image c",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "image d",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "image e",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 6,
		image: "https://www.bimcommunity.com/files/images/userlib/construction_trends_bimcommunity.jpg",
		title: "image f",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 7,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "image g",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 8,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "image g",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 9,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image h",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 10,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "image i",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 11,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "image j",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 12,
		image: "https://www.bimcommunity.com/files/images/userlib/construction_trends_bimcommunity.jpg",
		title: "image k",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	}
];

const worksites = [
	{
		id: 1,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "image a",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 2,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "image b",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 3,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "image c",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image d",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "image e",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 6,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "image f",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 7,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "image g",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 8,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image h",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	}
];

const office = [
	{
		id: 1,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image a",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 2,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "image b",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 3,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image c",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "image d",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "image e",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 6,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image f",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	}
];

const events = [
	{
		id: 1,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "image g",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 2,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "image h",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 3,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "image i",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "image j",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image k",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 6,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "image l",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 7,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "image m",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 8,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "image n",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 9,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "image o",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 10,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "image p",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	}
];

function Gallery() {
	const tablist = [{ label: "All", value: "all" }, { label: "Events", value: "events" }, { label: "Work Sites", value: "worksites" }, { label: "Office", value: "office" }];
	const [gridItems, setGridItems] = useState([]);
	const [instanceCount, setInstanceCount] = useState(0);
	const [galleryCategories, setGalleryCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activetab, setActivetab] = useState("all");
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
	const navigate = useNavigate();

	const _setActivetab = (tab) => {
		setActivetab(tab);
		setGridItems([]);
		searchParams.set("page", 1);
		setSearchParams(searchParams);
	};

	const _getGalleryItems = (signal) => {
		setLoading(true);
		let currentpage = searchParams.get("page") ? searchParams.get("page") : 1;
		let pageqry = `page=${currentpage}`;
		let filterQuery = ``;

		if (activetab === "all") {
			filterQuery = `/?${pageqry}`;
		} else {
			filterQuery = `/?category=${activetab}&${pageqry}`;
		}

		getGalleryPageData(filterQuery, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setInstanceCount(res.json.count);
					setGridItems([...gridItems, ...res.json.results]);
				} else {
					setLoading(false);
				}
			})
			.catch((err) => {
				// handle error
				setLoading(false);
			});
	};

	const _getGaleryCategories = (query, signal) => {
		getGalleryCategoryData(query, signal)
			.then((res) => {
				if (res.response.ok) {
					let filteredCats = res.json.results.map((rc) => {
						return { label: rc.name, value: rc.id };
					});
					setGalleryCategories([{ label: "All", value: "all" }, ...filteredCats]);
				}
			})
			.catch((err) => {
				fireSpark("error", err);
			});
	};

	useEffect(() => {
		const controller = new AbortController();
		_getGaleryCategories("/", controller.signal);
		return () => controller.abort();
	}, []);

	useEffect(() => {
		const controller = new AbortController();
		_getGalleryItems(controller.signal);
		return () => controller.abort();
	}, [activetab, searchParams]);

	return (
		<>
			<div className="portfolio">
				<div className="portfolio__intro">
					<div className="portfolio__intro__header">Our Image Gallery</div>
					<div className="separator"></div>
					<div className="portfolio__intro__body">Our image gallery includes images of memorable moments captured in several events associated with our company.</div>
				</div>
				<CustomTabs tablist={galleryCategories} activetab={activetab} setActivetab={_setActivetab} />

				{!isEmpty(gridItems) && (
					<>
						<div className="portfolio__grid-container">
							{gridItems.map((port, ind) => {
								return (
									<div className="portfolio__grid-container__item">
										<div className="card" key={ind}>
											<figure class="card__thumb">
												<img src={port.image} alt={port.title} class="card__image" />
												<figcaption class="card__caption" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%" }}>
													<h2 class="card__gallery-title" style={{ width: "100%" }}>
														{port.alt_text}
													</h2>
													<button
														onClick={() => {
															window.open(port.image, "_blank");
														}}
														class="btn-primary-outlined"
													>
														<BsArrowRight style={{ fontSize: "17px" }} />
													</button>
												</figcaption>
											</figure>
										</div>
									</div>
								);
							})}
						</div>
					</>
				)}

				{!loading && isEmpty(gridItems) && <EmptyComp>No images</EmptyComp>}
				{isEmpty(gridItems) && loading && (
					<>
						<br />
						<br />
						<br />
						<br />
					</>
				)}
				{loading && (
					<div style={{ marginTop: "-50px", width: "100%", height: "100px", display: "flex", padding: "0px 0 0px 0" }}>
						<DotLoader />
					</div>
				)}
				<div>{!loading && !isEmpty(gridItems) && <Paging instanceCount={instanceCount} />}</div>
			</div>
		</>
	);
}

export default Gallery;
