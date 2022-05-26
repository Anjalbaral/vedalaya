import React, { useState } from "react";
// import { getFeatured } from "redux/blogs";
import { useDispatch } from "react-redux";
import BlogCard from "../components/Reusable/BlogCard";

const BlogsData = [
	{
		id: 1,
		title: "Here's Our Hand-Picked Selection Of Some Of The Most Beautiful Blogs",
		image: "",
		description: "The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		author: "anjal baral",
		pubdate: "Tue 05 2020",
		readtime: "2 min read"
	},
	{
		id: 2,
		title: "Here's Our Hand-Picked Selection Of Some Of The Most Beautiful Blogs",
		image: "",
		description: "The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		author: "anjal baral",
		pubdate: "Tue 05 2020",
		readtime: "2 min read"
	},
	{
		id: 3,
		title: "Here's Our Hand-Picked Selection Of Some Of The Most Beautiful Blogs",
		image: "",
		description: "The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		author: "anjal baral",
		pubdate: "Tue 05 2020",
		readtime: "2 min read"
	},
	{
		id: 4,
		title: "Here's Our Hand-Picked Selection Of Some Of The Most Beautiful Blogs",
		image: "",
		description: "The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		author: "anjal baral",
		pubdate: "Tue 05 2020",
		readtime: "2 min read"
	}
];

const Blogs = () => {
	const dispatch = useDispatch();
	const blogsList = [];
	const [Blogs, setBlogs] = useState([...BlogsData]);
	const [loading, setLoading] = useState(false);

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
