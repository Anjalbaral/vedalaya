import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CoverRadioSwitch from "../CoverRadioSwitch/CoverRadioSwitch";
import { changeActiveSlide } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Parallax, Background } from "react-parallax";
import DotLoader from "../Reusable/DotLoader";
import CONSTANTS from "../../globals/constant";
import parse from "html-react-parser";

function removeLastWord(str) {
	const lastIndexOfSpace = str.lastIndexOf(" ");

	if (lastIndexOfSpace === -1) {
		return str;
	}

	return str.substring(0, lastIndexOfSpace);
}

function CoverSection({ data, loading }) {
	const sliders = [
		{
			id: 1,
			title: "Naya titleA",
			content: "https://www.alpora.com/wp-content/uploads/2021/03/innovation-in-construction-2.jpg",
			description:
				"Vedalaya Group has the expertise to handle all types of construction projects.Construction projects can take many different forms, depending on the needs and goals of the project. "
		},
		{
			id: 2,
			title: "Naya titleB",
			content: "https://www.alpora.com/wp-content/uploads/2021/03/innovation-in-construction-2.jpg",
			description:
				"Vedalaya Group has the expertise to handle all types of construction projects.Construction projects can take many different forms, depending on the needs and goals of the project. "
		},
		{
			id: 3,
			title: "Naya titleC",
			content: "https://www.alpora.com/wp-content/uploads/2021/03/innovation-in-construction-2.jpg",
			description:
				"Vedalaya Group has the expertise to handle all types of construction projects.Construction projects can take many different forms, depending on the needs and goals of the project. "
		}
	];

	const [sliderData, setSliderData] = useState([]);

	useEffect(() => {
		if (data && data.length > 0) {
			let filteredData = data.map((fb) => {
				let isVideo = fb.content.slice(-3) === "mp4";
				return { ...fb, isVideo: isVideo };
			});
			setSliderData(filteredData);
		}
	}, [data]);

	let activeCover = useSelector((state) => state.main.activeSlide);
	const dispatch = useDispatch();
	const _setCoverSlider = (activeid) => {
		dispatch(changeActiveSlide(activeid));
	};

	let isMobile = window.innerWidth < 700;

	if (loading)
		return (
			<div className="home__cover-section" style={{ alignItems: "flex-start" }}>
				<div style={{ marginTop: "0px", width: "100%", height: "100px", display: "flex", padding: "60px 0 0px 0" }}>
					<DotLoader />
				</div>
			</div>
		);
	console.log("slider data:", sliderData, sliderData.filter((sf, ind) => ind + 1 === activeCover)[0] && sliderData.filter((sf, ind) => ind + 1 === activeCover)[0], activeCover);
	return (
		<Parallax
			className="cover-parent"
			style={{ minWidth: "100%" }}
			blur={{ min: -10, max: 10 }}
			strength={300}
			bgClassName="parallexComp"
			// bgImageStyle={{ width: isMobile ? "150%" : "100%" }}
			// bgImage={}
		>
			<Background>
				{sliderData && sliderData.filter((sf, ind) => ind + 1 === activeCover)[0] && sliderData.filter((sf, ind) => ind + 1 === activeCover)[0].isVideo ? (
					<video
						src={
							sliderData && sliderData.filter((sf, ind) => ind + 1 === activeCover)[0] && sliderData.filter((sf, ind) => ind + 1 === activeCover)[0].content
								? `${CONSTANTS.BASE_URL}${sliderData.filter((sf, ind) => ind + 1 === activeCover)[0].content}`
								: ""
						}
						width={isMobile ? window.innerWidth * 3 : window.innerWidth}
						autoPlay
						muted
						loop
					/>
				) : (
					<img
						src={
							sliderData && sliderData.filter((sf, ind) => ind + 1 === activeCover)[0] && sliderData.filter((sf, ind) => ind + 1 === activeCover)[0].content
								? `${CONSTANTS.BASE_URL}${sliderData.filter((sf, ind) => ind + 1 === activeCover)[0].content}`
								: ""
						}
					/>
				)}
			</Background>
			<div className="home__cover-section">
				{/* <div className="home__cover-section__full-cover-img" style={{ backgroundImage: `url(${sliders.filter((im, ind) => im.id === activeCover)[0].image})` }}></div> */}
				{/* left arrow */}
				<div
					onClick={() => {
						if (activeCover === 1) {
							_setCoverSlider(sliderData.length);
						} else {
							_setCoverSlider(activeCover - 1);
						}
					}}
					className="home__cover-section__left-arrow"
				>
					<IoIosArrowBack />
				</div>
				{/* cover section left body */}
				<div className="home__cover-section__left">
					{sliderData &&
						sliderData.map((infos, index) => {
							return (
								<div key={index} className={`cover-info ${index + 1 === activeCover ? "cover-info-active" : ""}`}>
									<div className="cover-info-title">
										<span>{removeLastWord(infos.title)}</span>
										<span className="highlight">{infos.title.split(" ")[infos.title.split(" ").length - 1]}</span>
									</div>
									<div className="cover-info-brief">{infos && infos.description ? parse(infos.description) : ""}</div>
									{/* <div className="cover-info-head">
										<span className="highlight">Vedalaya Group</span>
										<span>expertize on</span>
									</div>

									<div className="cover-info-title">
										<span>{removeLastWord(infos.content.title)}</span>
										<span className="highlight">{infos.content.title.split(" ")[infos.content.title.split(" ").length - 1]}</span>
									</div>
									<div className="cover-info-divider"></div>
									<div className="cover-info-brief">{infos.content.brief}</div> */}
									{infos && infos.redirect && (
										<a className="btn-primary" href={infos.redirect.toString()}>
											Learn More
										</a>
									)}
								</div>
							);
						})}
				</div>
				{/* cover section right body */}
				<div className="home__cover-section__right">
					<div className="home__cover-section__right__image">
						{sliderData &&
							sliderData.map((immg, index) => {
								if (immg.isVideo) {
									return <video key={index} className={`cover-img ${index + 1 === activeCover ? "cover-active" : ""}`} src={`${CONSTANTS.BASE_URL}${immg.content}`} controls />;
								} else {
									return <img className={`cover-img ${index + 1 === activeCover ? "cover-active" : ""}`} src={`${CONSTANTS.BASE_URL}${immg.content}`} />;
								}
							})}
					</div>
				</div>
				{/* cover section right arrow */}
				<div
					onClick={() => {
						if (activeCover === sliderData.length) {
							_setCoverSlider(1);
						} else {
							_setCoverSlider(activeCover + 1);
						}
					}}
					className="home__cover-section__right-arrow"
				>
					<IoIosArrowForward />
				</div>
				<div className="DotContainer">
					<span className="DotAnimation">
						<span className="Dot">.</span>
					</span>
				</div>

				{/* cover slider switch */}
				<CoverRadioSwitch />
			</div>
		</Parallax>
	);
}

export default CoverSection;
