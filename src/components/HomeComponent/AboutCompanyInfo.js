import React from "react";
import backimg from "../../assets/images/home-about-us.jpeg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function AboutCompanyInfo() {
	let navigate = useNavigate();

	return (
		<div className="home__company-info">
			<div style={{ backgroundImage: `${backimg}` }} className="home__company-info__left">
				<div className="partb">
					<h5>About us</h5>
					<span>
						Vedalaya is a group of construction and construction materials trading companies that specialize in modern construction methods and materials. Vedalaya Construction Pvt. Ltd. and Vedalaya
						Trading Pvt. Ltd, are at the forefront of modern and innovative solutions in this field.
					</span>
					<button
						onClick={() => {
							navigate("/aboutus");
						}}
						className="btn-primary rounded"
					>
						Learn More
						<HiOutlineArrowNarrowRight />
					</button>
				</div>
			</div>
			<div className="home__company-info__right">
				<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
					<div className="aboutus" style={{ marginTop: "50px" }}>
						<div className="ourvision">
							<span className="head">Our Vision</span>
							<span className="body" style={{ fontSize: "15px" }}>
								Vedalaya Group is committed to finding better ways to build throughout Nepal. We provide complete construction services to realize our customer's projects through consultation to
								construction, along with modern and innovative construction materials of optimal qualities for each project.
							</span>
						</div>
						<div className="whyus" style={{ marginTop: "50px" }}>
							<span className="head">Our Story</span>
							<span className="body" style={{ fontSize: "15px" }}>
								With over a decade of experience in the construction and construction materials industry, we provide holistic solutions for all your needs. What's more, the company also offers a
								construction consultation service that helps you to plan your project from inception to closure.
							</span>
						</div>
						<div className="whyus" style={{ marginTop: "50px" }}>
							<span className="head">Our Team</span>
							<span className="body" style={{ fontSize: "15px" }}>
								The founder of Vedalaya Construction and Trading Company, Mr. Jaya Ram Aryal, has a long and successful history in the construction and trading industry. Beginning with a background in
								construction, Mr. Aryal has worked his way up to leading one of the most successful construction and trading firms in Nepal, Kshamadevi Group.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutCompanyInfo;
