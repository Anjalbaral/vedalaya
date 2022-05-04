import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import crane from "../../assets/images/crane.png";

function ClientsView({ slides }) {
	const [activeSlide, setActiveSlide] = useState(1);

	const _plus = (active) => {
		if (active === slides.length) {
			// if slide is at the end
			setActiveSlide(1);
		} else {
			setActiveSlide(active + 1);
		}
	};

	const _minus = (active) => {
		if (active === 1) {
			// if slide is at the end
			setActiveSlide(slides.length);
		} else {
			setActiveSlide(active - 1);
		}
	};

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
				{slides &&
					slides.map((data, index) => {
						return (
							<div key={index} className={`slide ${parseInt(data.id) === parseInt(activeSlide) ? "active" : ""}`}>
								<img
									src={data.thumbnail}
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
								<b>{data.title}</b>
								<span>{data.description}</span>
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
