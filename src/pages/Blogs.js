import React, { useState, useEffect } from "react";
// import { getFeatured } from "redux/blogs";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BlogCard from "../components/Reusable/BlogCard";
import { getBlogsData } from "../api/blogs";
import fireSpark from "../helpers/spark";
import DotLoader from "../components/Reusable/DotLoader";
import isEmpty from "../helpers/isEmpty";
import EmptyComp from "../components/Reusable/Empty";
import Paging from "../components/Reusable/Paging";
import Blog from "./Blog";

const BlogsData = [
	{
		id: 1,
		title: "Building with UPVC products - Nepal's new standard",
		image: "",
		description: "As Nepal continues to grow and develop, there is a need for efficient, cost-effective building materials that can withstand the harsh weather conditions of",
		author: "anjal baral",
		pubdate: "Tue 05 2020",
		readtime: "2 min read"
	},
	{
		id: 2,
		title: "Building with UPVC products - Nepal's new standard",
		image: "",
		description: "As Nepal continues to grow and develop, there is a need for efficient, cost-effective building materials that can withstand the harsh weather conditions of",
		author: "anjal baral",
		pubdate: "Tue 05 2020",
		readtime: "2 min read"
	},
	{
		id: 3,
		title: "Building with UPVC products - Nepal's new standard",
		image: "",
		description: "As Nepal continues to grow and develop, there is a need for efficient, cost-effective building materials that can withstand the harsh weather conditions of",
		author: "anjal baral",
		pubdate: "Tue 05 2020",
		readtime: "2 min read"
	},
	{
		id: 4,
		title: "Building with UPVC products - Nepal's new standard",
		image: "",
		description: "As Nepal continues to grow and develop, there is a need for efficient, cost-effective building materials that can withstand the harsh weather conditions of",
		author: "anjal baral",
		pubdate: "Tue 05 2020",
		readtime: "2 min read"
	}
];

const Blogs = () => {
	const [Blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [instanceCount, setInstanceCount] = useState(0);
	const [searchParams, setSearchParams] = useSearchParams();

	const _getBlogs = (signal) => {
		setLoading(true);
		let currentpage = searchParams.get("page") ? searchParams.get("page") : 1;
		let pageqry = `page=${currentpage}`;
		let filterQuery = `/?${pageqry}`;

		getBlogsData(filterQuery, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setInstanceCount(res.json.count);
					setBlogs([...Blogs, ...res.json.results]);
				} else {
					fireSpark("error", "Blogs fetch error!");
				}
			})
			.catch((err) => {
				fireSpark("error", err);
			});
	};

	useEffect(() => {
		const controller = new AbortController();
		_getBlogs(controller.signal);
		return () => controller.abort();
	}, [searchParams]);

	return (
		<div className="blogs">
			<div className="blog-container">
				<div className="">
					<h2>Explore blogs</h2>
					{!isEmpty(Blogs) && (
						<div className="blogs__contain">
							{Blogs.map((blog) => (
								<BlogCard key={blog.id} blog={blog} type="blog" />
							))}
						</div>
					)}
					{!loading && isEmpty(Blogs) && <EmptyComp>No Any Blogs</EmptyComp>}
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
					<div>{!loading && !isEmpty(Blogs) && <Paging instanceCount={instanceCount} />}</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
