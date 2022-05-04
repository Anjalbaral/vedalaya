import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Cover1 from "../../assets/images/cover1.png";
import Cover2 from "../../assets/images/cover2.jpg";
import Cover3 from "../../assets/images/cover3.jpg";
import Cover4 from "../../assets/images/cover4.jpg";
import Cover5 from "../../assets/images/cover5.jpg";
import CoverRadioSwitch from "../CoverRadioSwitch/CoverRadioSwitch";
import { changeActiveSlide } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Parallax } from "react-parallax";

function removeLastWord(str) {
	const lastIndexOfSpace = str.lastIndexOf(" ");

	if (lastIndexOfSpace === -1) {
		return str;
	}

	return str.substring(0, lastIndexOfSpace);
}

function CoverSection(props) {
	const sliders = [
		{
			id: 1,
			title: "1",
			image: "https://nestia-food.obs.ap-southeast-3.myhuaweicloud.com/202008/22/2ef21105aeffc8aeedcbc5bbd3075ffc.jpg",
			content: {
				head: "Welcome to",
				title: "Construction Materials",
				brief: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
			}
		},
		{
			id: 2,
			title: "2",
			image: Cover2,
			content: {
				head: "Welcome to",
				title: "Interior Design Materials",
				brief: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
			}
		},
		{
			id: 3,
			title: "3",
			image: Cover3,
			content: {
				head: "Welcome to",
				title: "Exterior Design Materials",
				brief: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
			}
		},
		{
			id: 4,
			title: "4",
			image: "https://www.recommend.my/blog/wp-content/uploads/2018/11/5ae26fed-23ec-4c70-890d-8ca12cdd8dad_pasted20image200.jpg",
			content: {
				head: "Welcome to",
				title: "Design And Construction",
				brief: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
			}
		},
		{
			id: 5,
			title: "5",
			image: "https://media.homeanddecor.com.sg/public/2014/03/16286.jpg",
			content: {
				head: "Welcome to",
				title: "Trading Service",
				brief: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
			}
		}
	];

	let activeCover = useSelector((state) => state.main.activeSlide);
	const dispatch = useDispatch();
	const _setCoverSlider = (activeid) => {
		dispatch(changeActiveSlide(activeid));
	};

	return (
		<Parallax
			className="cover-parent"
			style={{ minWidth: "100%" }}
			blur={{ min: -10, max: 10 }}
			strength={300}
			bgClassName="parallexComp"
			bgImageStyle={{ width: "100%" }}
			bgImage={sliders.filter((im, ind) => im.id === activeCover)[0].image}
		>
			<div className="home__cover-section">
				{/* <div className="home__cover-section__full-cover-img" style={{ backgroundImage: `url(${sliders.filter((im, ind) => im.id === activeCover)[0].image})` }}></div> */}
				{/* left arrow */}
				<div
					onClick={() => {
						if (activeCover === 1) {
							_setCoverSlider(5);
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
					{sliders.map((infos, index) => {
						return (
							<div key={index} className={`cover-info ${infos.id === activeCover ? "cover-info-active" : ""}`}>
								<div className="cover-info-head">
									<span className="highlight">Vedalaya Group</span>
									<span>presents</span>
								</div>

								<div className="cover-info-title">
									<span>{removeLastWord(infos.content.title)}</span>
									<span className="highlight">{infos.content.title.split(" ")[infos.content.title.split(" ").length - 1]}</span>
								</div>
								<div className="cover-info-divider"></div>
								<div className="cover-info-brief">{infos.content.brief}</div>
								<button className="btn-primary">Learn More</button>
							</div>
						);
					})}
				</div>
				{/* cover section right body */}
				<div className="home__cover-section__right">
					<div className="home__cover-section__right__image">
						{sliders.map((immg, index) => {
							return <img key={index} className={`cover-img ${immg.id === activeCover ? "cover-active" : ""}`} src={immg.image} />;
						})}
					</div>
				</div>
				{/* cover section right arrow */}
				<div
					onClick={() => {
						if (activeCover === 5) {
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
