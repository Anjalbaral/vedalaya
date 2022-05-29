import React, { useState, useEffect } from "react";
// import { getFeatured } from "redux/blogs";
import { useDispatch } from "react-redux";
import BlogCard from "../components/Reusable/BlogCard";
import { getBlogsData } from "../api/blogs";
import fireSpark from "../helpers/spark";

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
	const [loading, setLoading] = useState(false);

	const _getBlogs = (query, signal) => {
		getBlogsData(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setLoading(false);
					setBlogs(res.json.results);
				}
			})
			.catch((err) => {
				fireSpark("error", err);
			});
	};

	useEffect(() => {
		const controller = new AbortController();
		_getBlogs("/", controller.signal);
		return () => controller.abort();
	}, []);

	return (
		<div className="blogs">
			<div className="blog-container">
				<div className="">
					<h2>Explore blogs</h2>
					{loading ? (
						<div className="blogs__contain">
							{new Array(4).map((c, i) => (
								<BlogCard loading key={i} />
							))}
						</div>
					) : (
						<div className="blogs__contain">
							{Blogs.map((blog) => (
								<BlogCard key={blog} blog={blog} type="blog" />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
