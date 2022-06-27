import React from "react";
import blogPlaceholder from "../../assets/images/activemenuicon.png";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CareerCard = ({ career, loading }) => {
	let careerText = career && career.description ? career.description : "";

	return (
		<>
			<div className="career-card">
				<div
					className="career-card__left"
					style={{
						background: `url(${
							career && career.title_image ? career.title_image : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCcCeM42oBqyEDUbxLF0agTDAxtrr4yfqnGWY6qZYb6RcUEJKNwJfjWxwEbvOsDKAKN4&usqp=CAU`
						})`,
						backgroundSize: "100%",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center"
					}}
				></div>
				<div className="career-card__right">
					<h3>{career.title ? career.title : "Untitled"}</h3>

					<p style={{ opacity: 0.7 }}>
						Number of Positions : <b>{career.number_of_vacancies ? career.number_of_vacancies : 0}</b>
					</p>
					<span style={{ borderBottomStyle: "solid", borderBottomWidth: "1px", paddingBottom: "3px", marginBottom: "3px", borderColor: "rgba(0,0,0,0.1)", opacity: "0.5" }}>
						Location : <b>{career.location ? career.location : "-"}</b>
					</span>
					<br />
					<div>
						<p style={{ height: "150px", overflow: "hidden", paddingTop: "5px" }}>{careerText ? parse(careerText) : ""}</p>
					</div>
					<br />
					<div className="gotolink">
						<Link to={`/career/${career.id}`}>
							<b>More Info</b>
							<HiOutlineArrowNarrowRight />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CareerCard;
