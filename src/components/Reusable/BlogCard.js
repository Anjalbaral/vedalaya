import React from "react";
// import { PropTypes } from "prop-types";

// import Loader from "../Loaders/Loader";
import blogPlaceholder from "../../assets/images/activemenuicon.png";

/**
 *
 * @param {boolean} loading
 * @param {object} blog
 * @param {object} type === blog then display blog header details
 * @returns React Component
 */
const BlogCard = ({ blog, type, loading }) => {
	if (loading) {
		return (
			<div className="blog__card">
				<img src={blogPlaceholder} className="loader" alt={"loading"} />
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
				<img id="blogImg" src={blog && `https://picsum.photos/500/300?random=${blog}`} alt={blog} />
			</a>
			{type && type === "blog" && (
				<div className="blog__info">
					<p>{new Date().toDateString()}</p>
					<p>&#x2022;</p>
					<p>2 min read</p>
				</div>
			)}
			<h4>
				<a href={"/blog/" + blog.id}>8 Wild turkeys. and relocations. A</a>
			</h4>
			<p>Codes and School. The Chicago Marathon has been reused by scientists for the government in</p>
		</div>
	);
};

export default BlogCard;
