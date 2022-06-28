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

let careersData = [
	{
		description: "Good buildings come from good peopl",
		title_image: "https://vedalayagroup.com/media/blogs/c302736c-f2ef-442f-8dc4-058c63567286_t0rwPBV.jfif",
		created_at: "2022-06-26T14:58:26.797689+05:45",
		id: 2,
		title: "Construction Industry in Nepal: Challenges, Opportunity, and Trends",
		updated_at: "2022-06-27T13:04:33.315811+05:45"
	}
];

function Careers() {
	const [careers, setCareers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [instanceCount, setInstanceCount] = useState(0);
	const [searchParams, setSearchParams] = useSearchParams();

	const _getCareers = (query, signal) => {
		getCareers(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setCareers([...careers, ...res.json.results]);
					setInstanceCount(res.json.count);
				} else {
					setLoading(false);
				}
			})
			.catch((err) => {
				setLoading(false);
			});
	};

	useEffect(() => {
		const controller = new AbortController();
		let currentpage = searchParams.get("page") ? searchParams.get("page") : 1;
		let pageqry = `page=${currentpage}`;
		let filterQuery = "";
		if (currentpage) {
			filterQuery = `?${pageqry}`;
		}

		_getCareers(filterQuery, controller.signal);
		return () => controller.abort();
	}, [searchParams]);

	if (loading)
		return (
			<div style={{ marginTop: "0px", width: "100%", height: "100vh", display: "flex", padding: "140px 0 0px 0" }}>
				<DotLoader />
			</div>
		);
	return (
		<div className="careers">
			<div className="careers-container">
				<h2>Careers</h2>
				<br />
				<div className="career-items">
					{careers.map((cd) => {
						return <CareerCard career={cd} loading={false} />;
					})}
				</div>
			</div>
			{!loading && isEmpty(careers) && <EmptyComp>No Any Openings</EmptyComp>}
			<br />
			<br />
			<br />
			<div className="divider"></div>
			<br />
			<br />
			<br />
			<br />
			{loading && (
				<div style={{ marginTop: "0px", width: "100%", height: "100px", display: "flex", padding: "0px 0 0px 0" }}>
					<DotLoader />
				</div>
			)}
			<div>{!loading && !isEmpty(careers) && <Paging instanceCount={instanceCount} />}</div>
		</div>
	);
}

export default Careers;
