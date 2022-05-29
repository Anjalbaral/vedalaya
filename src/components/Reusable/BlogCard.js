import React from "react";
import blogPlaceholder from "../../assets/images/activemenuicon.png";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, type, loading }) => {
	if (loading) {
		return (
			<div className="blog__card">
				<img src={blog.image ? blog.image : blogPlaceholder} className="loader" alt={"loading"} />
				{/* <Loader height={250} width={12} /> */}
				<div className="blog__info" style={{ display: "flex", alignItems: "center" }}>
					{/* <Loader height={12} width={2} /> */}
					<p style={{ color: "#ebebeb" }}>&#x2022;</p>
					{/* <Loader height={12} width={2} /> */}
				</div>
				<h4>{/* <Loader height={30} width={12} /> */}</h4>
				{/* <Loader height={18} width={12} /> */}
				{/* <Loader height={12} width={12} /> */}
			</div>
		);
	}

	return (
		<div className="blog__card">
			<a>
				<img id="blogImg" src={blog && blog.image ? blog.image : `https://picsum.photos/500/300?random=${blog}`} alt={blog} />
			</a>
			{type && type === "blog" && (
				<div className="blog__info">
					<p>{blog && blog.created_at ? blog.created_at.slice(0, 10) : null}</p>
					<p>&#x2022;</p>
					<p>.. min read</p>
				</div>
			)}
			<h4>
				<Link to={"/blog/" + blog.id}>{blog.title}</Link>
			</h4>
			<p>{blog.content ? blog.content.slice(0, 120) : ""}</p>
		</div>
	);
};

export default BlogCard;
