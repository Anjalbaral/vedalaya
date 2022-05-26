import React from "react";
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
					<p>{blog.pubdate}</p>
					<p>&#x2022;</p>
					<p>{blog.readtime}</p>
				</div>
			)}
			<h4>
				<a href={"/blog/" + blog.id}>{blog.title}</a>
			</h4>
			<p>{blog.description}</p>
		</div>
	);
};

export default BlogCard;
