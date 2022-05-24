import React, { useEffect } from "react";
// import { getFeatured } from "redux/blogs";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/Reusable/BlogCard";

const Blogs = () => {
	const dispatch = useDispatch();
	// useEffect(() => dispatch(getFeatured()), [dispatch]);
	const blogsList = [];
	const loading = false;

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
							{[1, 2, 3, 4, 5].map((blog) => (
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
