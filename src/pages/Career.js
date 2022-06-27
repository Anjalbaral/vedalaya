import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BlogCard from "../components/Reusable/BlogCard";
import { getBlogsData } from "../api/blogs";
import fireSpark from "../helpers/spark";
import DotLoader from "../components/Reusable/DotLoader";
import isEmpty from "../helpers/isEmpty";
import EmptyComp from "../components/Reusable/Empty";
import Paging from "../components/Reusable/Paging";
import CareerCard from "../components/Reusable/CarrerCard";
import { getCareers } from "../api/others";
import CarrersWorkItem from "../components/Reusable/CarrersWorkItem";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MdLocationOn, MdOutlineWork } from "react-icons/md";
import parse from "html-react-parser";
import { BsCalendarDateFill } from "react-icons/bs";

function Career() {
	const [careerData, setCareerData] = React.useState({});
	const [loading, setLoading] = React.useState(false);
	let params = useParams();

	const _getCareers = (query, signal) => {
		setLoading(true);
		getCareers(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setCareerData(res.json);
				}
			})
			.catch((err) => {});
	};

	useEffect(() => {
		const controller = new AbortController();
		_getCareers(`${params.id}/`, controller.signal);
		return () => controller.abort();
	}, []);

	if (loading)
		return (
			<div style={{ marginTop: "0px", width: "100%", height: "100vh", display: "flex", padding: "140px 0 0px 0" }}>
				<DotLoader />
			</div>
		);

	return (
		<div className="career">
			<main class="interested page__main">
				<div class="container">
					<div class="interested__wrapper">
						<div class="interested-job interested__job">
							<div className="interested__job wrap">
								<div style={{ display: "flex", flex: 0.5, flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", paddingRight: "25px" }}>
									<h1 class="interested-job__title">{careerData && careerData.title ? careerData.title : "Untitled"}</h1>

									<div class="interested-job__section interested-job__location">
										<h5 class="interested-job__location__title" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
											<MdLocationOn /> Location
										</h5>
										<h5 class="interested-job__location__address">
											<div></div>
											{careerData && careerData.location ? careerData.location : "Unknown"}
										</h5>
										<br />
										<h5 class="interested-job__location__title">
											<MdOutlineWork /> Vacancies
										</h5>
										<h5 class="interested-job__location__address">
											<div></div>
											{careerData && careerData.number_of_vacancies ? careerData.number_of_vacancies : "Unknown"}
										</h5>
										<br />
										<h5 class="interested-job__location__title">
											<BsCalendarDateFill style={{ fontSize: "18px" }} /> Created At
										</h5>
										<h5 class="interested-job__location__address">
											<div></div>
											{careerData && careerData.created_at ? careerData.created_at.split("T")[0] : "Unknown"}
										</h5>
									</div>
								</div>
								<div
									class="interested-job__image"
									style={{
										backgroundImage: `url(${careerData && careerData.title_image ? careerData.title_image : "http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png"})`,
										display: "flex",
										flex: 0.5
									}}
								></div>
							</div>
							<div class="interested-job__section">
								<h4 class="interested-job__section__header">Job Description</h4>

								<div class="interested-job__section__content">{careerData && careerData.description ? parse(careerData.description) : "-"}</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Career;
