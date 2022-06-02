import React, { useState, useEffect } from "react";
import CustomTabs from "../components/Reusable/CustomTabs";
import { BsArrowRight } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getPortfoliosData } from "../api/portfolio";
import fireSpark from "../helpers/spark";
import parse from "html-react-parser";
import DotLoader from "../components/Reusable/DotLoader";
import isEmpty from "../helpers/isEmpty";
import EmptyComp from "../components/Reusable/Empty";
import Paging from "../components/Reusable/Paging";

const all = [
	{
		id: 1,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "vedalaya project name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 2,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 3,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 6,
		image: "https://www.bimcommunity.com/files/images/userlib/construction_trends_bimcommunity.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 7,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "vedalaya project name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 8,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 9,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 10,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 11,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 12,
		image: "https://www.bimcommunity.com/files/images/userlib/construction_trends_bimcommunity.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	}
];

const upcoming = [
	{
		id: 1,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "vedalaya project name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 2,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 3,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "vedalaya project name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 6,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 7,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 8,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	}
];

const ongoing = [
	{
		id: 1,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 2,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 3,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 6,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	}
];

const completed = [
	{
		id: 1,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 2,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "vedalaya project name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 3,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 6,
		image: "https://relyantglobal.com/images/45964319_xxl.jpg?crc=507293443",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 7,
		image: "https://www.nepalyp.com/img/cats/construction.jpg",
		title: "vedalaya project name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam"
	},
	{
		id: 8,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Workers_bend_reinforcing_bar%2C_or_rebar%2C_to_strengthen_concrete_for_a_facility_that_will_house_372_students_as_part_of_the_Herat_University_Women%27s_Dormitory_Project_in_Herat_province%2C_Afghanistan%2C_March_11_140311-A-DT641-067.jpg/1200px-thumbnail.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 9,
		image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 10,
		image: "https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg",
		title: "vedalaya project name",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	}
];

function Portfolio() {
	const tablist = [{ label: "All", value: "all" }, { label: "Completed", value: "completed" }, { label: "Ongoing", value: "ongoing" }];
	const [gridItems, setGridItems] = useState([]);
	const [activetab, setActivetab] = useState("all");
	const [instanceCount, setInstantCount] = useState(0);
	const location = useLocation();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const _getPortfolios = (query, signal) => {
		setLoading(true);
		getPortfoliosData(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setInstantCount(res.json.count);
					setGridItems(res.json.results);
				}
			})
			.catch((err) => {
				// fireSpark("error", err);
			});
	};

	useEffect(() => {
		const controller = new AbortController();
		if (activetab === "all") {
			_getPortfolios("", controller.signal);
		} else {
			_getPortfolios(`?search=${activetab}`, controller.signal);
		}
		return () => controller.abort();
	}, [activetab]);

	useEffect(() => {
		const queryString = location.search;
		const queryParams = new URLSearchParams(queryString) || "";
		let atab = queryParams.get("type");
		if (atab) {
			setActivetab(atab);
		} else {
			setActivetab("all");
		}
	}, [location]);

	return (
		<div className="portfolio">
			<div className="portfolio__intro">
				<div className="portfolio__intro__header">Our Portfolio</div>
				<div className="separator"></div>
				<div className="portfolio__intro__body">Our portfolio itself is the source of confidence, we deliver quality construction projects on time and on budget all over Nepal.</div>
			</div>
			<CustomTabs tablist={tablist} activetab={activetab} setActivetab={setActivetab} />
			<br />
			{!isEmpty(gridItems) && (
				<div className="portfolio__grid-container">
					{gridItems.map((port, ind) => {
						return (
							<div className="portfolio__grid-container__item">
								<div className="card" key={ind}>
									<figure class="card__thumb">
										<img src={port.header_image} alt={port.name} class="card__image" />
										<figcaption class="card__caption">
											<h2 class="card__title">{port.name}</h2>
											<p class="card__snippet" style={{ width: "100%" }}>
												{port && port.description ? (port.description && port.description.length > 100 ? parse(port.description.substring(0, 100)) + "..." : parse(port.description)) : ""}
											</p>
											<Link to={`/portfolio/${port.id}`} class="btn-primary-outlined">
												Learn More <BsArrowRight style={{ fontSize: "17px", marginLeft: "5px" }} />
											</Link>
										</figcaption>
									</figure>
								</div>
							</div>
						);
					})}
				</div>
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
	);
}

export default Portfolio;
