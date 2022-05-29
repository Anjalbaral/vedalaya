import React, { useState, useEffect } from "react";
import servicecover from "../assets/images/productscover2.jpg";
import { Parallax } from "react-parallax";
import { getBlogsData } from "../api/blogs";
import fireSpark from "../helpers/spark";
import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";

const Blog = () => {
	const [blogData, setBlogData] = useState({});
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	const params = useParams();

	const _getBlog = (query, signal) => {
		getBlogsData(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setBlogData(res.json);
				}
			})
			.catch((err) => {
				fireSpark("error", err);
			});
	};

	useEffect(() => {
		const controller = new AbortController();
		_getBlog(`/${params.id}/`, controller.signal);
		return () => controller.abort();
	}, []);

	let isMobile = window.innerWidth < 700;

	return (
		<div className="blog">
			<br />
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%", borderRadius: "10px" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: isMobile ? "300%" : "100%", backgroundSize: "100%", backgroundPosition: "cover", marginTop: "0px" }}
				bgImage={servicecover}
			>
				<div className="blog__cover">
					<div className="blog__cover__overlay"></div>
				</div>
			</Parallax>
			<div className="blog__body">
				<div className="blog__info" style={{ display: "flex", fontSize: "16px", fontWeight: "bold", alignItems: "center" }}>
					<p style={{ fontSize: "16px", opacity: 0.8 }}>{blogData && blogData.created_at ? blogData.created_at.slice(0, 10) : ""}</p>
					<p style={{ fontSize: "20px", paddingLeft: "5px", opacity: 0.8 }}>&#x2022;</p>
					<p style={{ fontSize: "16px", paddingLeft: "5px", opacity: 0.8 }}>.. Min Read</p>
				</div>
				<div className="blog__body__header">
					<span>
						{blogData && blogData.title}
						{/* Here's Our Hand-Picked Selection Of Some Of The Most Beautiful Blogs */}
					</span>
				</div>
				<div className="separator"></div>
				<br />
				<div className="blog__body__content">
					<span>{blogData && blogData.content ? parse(blogData.content) : ""}</span>
				</div>
			</div>
		</div>
	);
};

export default Blog;
