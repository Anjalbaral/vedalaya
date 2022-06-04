import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import crane from "../../assets/images/crane.png";
import CONSTANTS from "../../globals/constant";
import DotLoader from "../Reusable/DotLoader";
import parse from "html-react-parser";

const swiperData = [
	{
		id: 1,
		name: "Ram Doe",
		logo: "https://us.123rf.com/450wm/yupiramos/yupiramos2004/yupiramos200436847/145498923-male-paramedic-avatar-character-icon-vector-illustration-design.jpg?ver=6",
		description: "Accusamus At vero eos et et iusto odio praesentium dignissimos ducimus qui blanditiis voluptatum deleniti atque corrupti quos dolores  excepturi et quas molestias sint"
	},
	{
		id: 2,
		name: "John Bastola",
		logo: "https://mpng.subpng.com/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg",
		description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint"
	},
	{
		id: 3,
		name: "Shyam Smith",
		logo: "https://basaschools.co.za/wp-content/uploads/2021/04/boy-avator.png",
		description: "Accusamus At vero eos et et iusto odio praesentium dignissimos ducimus qui blanditiis voluptatum deleniti atque corrupti quos excepturi dolores et quas molestias sint"
	},
	{
		id: 4,
		name: "Kelvin Adhikari",
		logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uzwCvGhb2QKHRMvwqrIfXooecA0St0Ku9_lHZw4QnGMykpom59ZSug63FfYMZfFE0Dw&usqp=CAU",
		description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint"
	}
];

function ClientsView({ data, loading }) {
	const [activeSlide, setActiveSlide] = useState(1);
	const [testimonilsData, setTestimonilsData] = useState([...swiperData]);

	useEffect(() => {
		if (data.length > 0) {
			setTestimonilsData(data);
		}
	}, [data]);

	const _plus = (active) => {
		if (active === testimonilsData.length) {
			// if slide is at the end
			setActiveSlide(1);
		} else {
			setActiveSlide(active + 1);
		}
	};

	const _minus = (active) => {
		if (active === 1) {
			// if slide is at the end
			setActiveSlide(testimonilsData.length);
		} else {
			setActiveSlide(activeSlide - 1);
		}
	};

	if (loading)
		return (
			<div className="home__clients-view">
				<DotLoader />
			</div>
		);

	return (
		<div className="home__clients-view">
			<div className="home__clients-view__header">TESTIMONILS</div>
			<div className="underline-separator">
				<div className="line"></div>
				<div className="mid"></div>
				<div className="line2"></div>
			</div>
			<div className="mySwiper">
				<button className="left" onClick={() => _minus(activeSlide)}>
					<MdChevronLeft />
				</button>
				{testimonilsData &&
					testimonilsData.map((data, index) => {
						return (
							<div key={index} className={`slide ${parseInt(index + 1) === parseInt(activeSlide) ? "active" : ""}`}>
								<img
									src={`${CONSTANTS.BASE_URL}${data.logo}`}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										backgroundColor: "#323232",
										color: "#7a7979",
										padding: "1px",
										width: "100px",
										borderRadius: "50%",
										height: "100px",
										marginBottom: "10px"
									}}
								/>
								<b>{data.name}</b>
								<span>{data && data.description ? parse(data.description) : ""}</span>
								<span></span>
							</div>
						);
					})}
				<button className="right" onClick={() => _plus(activeSlide)}>
					<MdChevronRight />
				</button>
			</div>
			<div className="crane">
				<img src={crane} />
			</div>
		</div>
	);
}

export default ClientsView;
